import React, { useState } from "react";
import Modal from "react-modal";

const Conversation = ({ entry, index, openFeedbackModal, feedbackData }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`d-flex flex-column justify-content-center align-self-center p-3 ${
        entry.type === "user" ? "user-chat" : "bot-chat"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ position: "relative" }}
    >
      <span>
        <strong>{entry.type === "user" ? "You" : "BoatAI"}:</strong>{" "}
        {entry.text}
      </span>

      {/* Like/Dislike buttons only for BoatAI messages */}
      {entry.type === "bot" && (
        <div className="d-flex mt-2 flex-column align-items-center">
          <span>
            <span onClick={() => openFeedbackModal("like", index)}>
              👍 Like
            </span>
            <span
              onClick={() => openFeedbackModal("dislike", index)}
              style={{ marginLeft: 2 }}
            >
              👎 Dislike
            </span>
          </span>

          {/* Show rating and feedback if it exists */}
          {feedbackData && (
            <div className="ml-3">
              <span style={{ marginRight: "5px" }}>
                <strong>Rating:</strong> {feedbackData.rating} ★
              </span>
              <span>
                <strong>Feedback:</strong> {feedbackData.feedbackText}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Conversation;
