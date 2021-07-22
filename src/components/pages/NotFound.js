import React from "react";
import notFound from "./notFound.gif";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="notFound">
      <img src={notFound} alt="Not Found" />
    </div>
  );
}

export default NotFound;
