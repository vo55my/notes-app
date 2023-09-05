import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, toggleArchive, showArchiveState, searchKeyword }) {
  let filteredNote;
  let title;

  if (showArchiveState) {
    filteredNote = notes.filter((note) => note.archived === true);
    title = (<h1 className="note-list__title">Archived Notes</h1>);
  } else if (!showArchiveState) {
    filteredNote = notes.filter((note) => note.archived === false);
    title = (<h1 className="note-list__title">Active Notes</h1>)
  }

  if (searchKeyword.length) {
    filteredNote = filteredNote.filter((note) => (note.title.toLowerCase()).includes(searchKeyword.toLowerCase()));
  }

  if (filteredNote.length) {
    return (
      <div className="note-list">
        {title}
        {
          filteredNote.map((note) => {
            return (<NoteItem key={note.id} {...note} onDelete={onDelete} toggleArchive={toggleArchive} archiveStatus={note.archived} />)
          })
        }
      </div>
    )
  } else {
    return (
      <div className="note-list">
        {title}
        <p className="note-empty">Tidak ada catatan</p>
      </div>
    )
  }
}

export default NoteList;