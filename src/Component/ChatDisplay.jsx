import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Conversation from "./Conversation";

export default function ChatDisplay({ conversation }) {
  const [hoverIndex, setHoverIndex] = useState(null); // Track which message is hovered
  const [showModal, setShowModal] = useState(false); // Modal visibility
  const [feedbackType, setFeedbackType] = useState(""); // "like" or "dislike"
  const [rating, setRating] = useState(0); // Rating (1 to 5 stars)
  const [feedbackText, setFeedbackText] = useState(""); // Feedback text
  const [selectedMessage, setSelectedMessage] = useState(null); // Track which message is being rated
  const [conversationData, setConversationData] = useState(conversation); // Update conversation with feedback

  // Open the feedback modal and set type
  const openFeedbackModal = (type, index) => {
    setFeedbackType(type);
    setSelectedMessage(index); // Track the message being rated
    setShowModal(true);
  };

  // Save feedback to localStorage
  const saveFeedbackToLocalStorage = (index, feedbackData) => {
    let feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || {};
    feedbacks[index] = feedbackData;
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  };

  // Handle feedback submission
  const handleSubmitFeedback = () => {
    const feedbackData = {
      type: feedbackType,
      feedbackText,
      rating,
      timestamp: new Date().toISOString(),
    };

    // Update the conversation state with feedback and rating
    const updatedConversation = conversationData.map((entry, i) => {
      if (i === selectedMessage) {
        return { ...entry, feedback: feedbackData }; // Add feedback to the bot's message
      }
      return entry;
    });

    setConversationData(updatedConversation); // Update the conversation with feedback

    // Save to localStorage
    saveFeedbackToLocalStorage(selectedMessage, feedbackData);

    setShowModal(false); // Close modal after submission
    setFeedbackText(""); // Clear feedback text
    setRating(0); // Reset rating
  };

  // Handle rating selection
  const handleRating = (rate) => setRating(rate);

  return (
    <div
      className="d-flex flex-column justify-content-start"
      style={{
        width: "40%",
        backgroundColor: "#BFACE2",
        borderRadius: 15,
        padding: 50,
      }}
    >
      {conversationData.map((entry, index) => (
        <Conversation
          key={index}
          entry={entry}
          index={index}
          openFeedbackModal={openFeedbackModal}
          feedbackData={entry.feedback}
        />
      ))}

      {/* Modal for submitting feedback */}
      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "500px",
            height: "auto",
            padding: "20px",
            borderRadius: 15,
          },
        }}
      >
        <h4>
          {feedbackType === "like"
            ? "Why did you like this?"
            : "Why did you dislike this?"}
        </h4>

        {/* Rating component */}
        <div className="d-flex my-3">
          {[1, 2, 3, 4, 5].map((rate) => (
            <span
              key={rate}
              onClick={() => handleRating(rate)}
              style={{
                fontSize: "24px",
                cursor: "pointer",
                color: rate <= rating ? "gold" : "gray",
                marginRight: "5px",
              }}
            >
              ★
            </span>
          ))}
        </div>

        {/* Feedback textarea */}
        <textarea
          rows="3"
          placeholder="Enter your feedback here..."
          value={feedbackText}
          onChange={(e) => setFeedbackText(e.target.value)}
          style={{ width: "100%" }}
          className="form-control"
        ></textarea>

        <div className="mt-3">
          <button className="btn btn-primary" onClick={handleSubmitFeedback}>
            Submit
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => setShowModal(false)}
          >
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
}
