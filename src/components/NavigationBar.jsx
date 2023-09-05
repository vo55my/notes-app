import React from 'react'
import NoteInput from './NoteInput';
import SearchInput from './SearchInput';
import ArchiveButton from './ArchiveButton';

function NavigationBar({ toggleShowArchive, showArchiveState, toggleAddNewNote, onSearchHandler }) {
  return (
    <div className='note-app__navigation-bar'>
      <SearchInput onSearchHandler={onSearchHandler} />
      <NoteInput toggleAddNewNote={toggleAddNewNote} />
      <ArchiveButton toggleShowArchive={toggleShowArchive} showArchiveState={showArchiveState} />
    </div>
  );
}

export default NavigationBar;