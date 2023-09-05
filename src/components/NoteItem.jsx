import React from "react";
import NoteItemAction from "./NoteItemAction";
import NoteItemContent from "./NoteItemContent";
import NoteItemHeader from "./NoteItemHeader";

function NoteItem ({id, title, body, createdAt, archiveStatus, onDelete, toggleArchive}) {
  return (
    <div className="note-item__card">
      <NoteItemHeader title={title} createdAt={createdAt}/>
      <NoteItemContent body={body}/>
      <NoteItemAction 
        id={id} 
        archiveStatus={archiveStatus} 
        onDelete={onDelete} 
        toggleArchiveItem={toggleArchive} 
      />
    </div>
  );
}

export default NoteItem;