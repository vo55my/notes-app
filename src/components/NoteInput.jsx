import React from "react";

function NewNoteButton({ toggleAddNewNote }) {
  return (
    <button className='btn navigation-bar__new-note' onClick={() => toggleAddNewNote()}><p>New Note</p></button>
  );
}

export default NewNoteButton;