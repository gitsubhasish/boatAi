import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Sidebar() {
  return (
    <div
      className="col-12 col-md-2 col-lg-2"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="row" style={{ padding: 5, backgroundColor: "#D7C7F4" }}>
        <div className="col-12 col-md-3">asasa</div>
        <div className="col-12 col-md-6">
          <p>New Chat</p>
        </div>
        <div className="col-12 col-md-3">
          <FontAwesomeIcon icon="fa-solid fa-cog" spin />
        </div>
      </div>
      <div className="row"></div>
    </div>
  );
}
