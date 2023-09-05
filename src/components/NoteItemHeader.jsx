import React from 'react'
import { showFormattedDate } from '../utils/index'

function NoteItemHeader({ title, createdAt }) {
  return (
    <header className='note-item__header'>
      <h4>{title}</h4>
      <p>{showFormattedDate(createdAt)}</p>
    </header>
  );
}

export default NoteItemHeader;