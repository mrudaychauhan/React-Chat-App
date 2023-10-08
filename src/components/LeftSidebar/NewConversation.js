import React from "react";

function NewConversation(props) {
  let handleClick = () => {
    props.showNewConvoTab(true);
  };
  return (
    <div className="new-convo">
      <p style={{marginBottom:"0"}}>New Conversation</p>
      <span onClick={handleClick}>
        <i className="fas fa-plus"></i>
      </span>
    </div>
  );
}

export default NewConversation;