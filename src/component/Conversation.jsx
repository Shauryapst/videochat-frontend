import React from "react";
import { useParams } from "react-router-dom";

const Conversation = () => {
  const { chatId } = useParams();
  return (
    <div>
      <h2>Converstation</h2>
      <p>Chat ID: {chatId}</p>
    </div>
  );
};

export default Conversation;
