import React from "react";
import ContactTab from "./ContactTab";

function ContactList({ contacts }) {
  // need contact tab component
  return (
    <>
      <div style={styles.contactList} className="contactscreen"> {/* using inline styling */}
        {contacts.map((contact, index) => (
          <ContactTab contact={contact} key={index} />
        ))}
      </div>
    </>
  );
}
const styles = {
  contactList: {
    height: "90vh",
    zIndex: "2",
    backgroundColor: "lightgrey",
  },
};
export default ContactList;