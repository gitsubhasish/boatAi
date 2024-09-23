import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import chatImg from "./assets/image 29.png";
import Sidebar from "./Component/Sidebar";
import ChatDisplay from "./Component/ChatDisplay";
import mockResponses from "./assets/mockResponses.json";
import StaticCard from "./Component/StaticCard";

function App() {
  const [conversation, setConversation] = useState([]);
  const [query, setQuery] = useState("");
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    setJsonData(mockResponses);
  }, []);

  const handleSearch = () => {
    const userQuery = query.trim();
    if (userQuery === "") return;

    console.log(jsonData);

    const result = jsonData.find((item) =>
      item.question.toLowerCase().includes(userQuery.toLowerCase())
    );

    const botResponse = result
      ? result.response
      : "Sorry, I don't know the answer to that.";

    setConversation([
      ...conversation,
      { type: "user", text: userQuery },
      { type: "bot", text: botResponse },
    ]);

    setQuery("");
  };

  return (
    <div className="App">
      <div className="row" style={{ height: "100vh" }}>
        <Sidebar />
        <div
          className="col-12 col-md-10 col-lg-10 d-flex flex-column justify-content-center"
          style={{ backgroundColor: "#9785BA33" }}
        >
          {conversation.length == 0 ? (
            <StaticCard />
          ) : (
            <ChatDisplay conversation={conversation} />
          )}
          <div className="row mt-5 d-flex justify-content-center align-items-center">
            <div className="col-9 col-md-10 col-lg-10">
              <input
                type="text"
                class="form-control"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <div className="col-3 col-md-2 col-lg-2">
              <button
                type="button"
                className="btn btn-sm btn-secondary"
                style={{ marginRight: 10 }}
                onClick={handleSearch}
              >
                Ask
              </button>
              <button type="button" className="btn btn-sm btn-success">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
