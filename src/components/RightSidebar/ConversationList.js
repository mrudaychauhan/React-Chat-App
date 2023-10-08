import React from "react";
import { useParams } from "react-router";
import "../stylesheets/rightSidebar.css";
import MessageBox from "./MessageBox";
function ConversationList(props) {
  const { contacts } = props;
  const { id } = useParams(); // we're using params to use :id in url and route
  const userId = parseInt(id);
  const user = contacts.find((contact) => contact.id === userId);

  return <>{user && <MessageBox user={user} />}</>;
}

export default ConversationList;