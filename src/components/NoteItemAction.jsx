import React from "react";

function NoteItemAction ({id, onDelete, toggleArchiveItem, archiveStatus}) {  
  let title;
  if(archiveStatus){
    title = 'Revert';
  } else {
    title = 'Archive';
  }

  return (
    <div className="note-item__action">
      <button className="action__delete" id={id} onClick={() => onDelete(id)}>Delete</button>
      <button className="action__archive" id={id} onClick={() => toggleArchiveItem(id)}>{title}</button>
    </div>
  );
}

export default NoteItemAction;