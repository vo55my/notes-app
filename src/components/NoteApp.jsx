import React from 'react'
import { getInitialData, showFormattedDate } from '../utils/index'
import Header from './Header';
import NavigationBar from './NavigationBar';
import FormNewNote from './FormNewNote';
import NoteList from './NoteList';
import Footer from './Footer';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      showArchive: false,
      onAddNewNote: false,
      searchKeyword: '',
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.toggleArchiveItem = this.toggleArchiveItem.bind(this);
    this.toggleShowArchive = this.toggleShowArchive.bind(this);
    this.toggleAddNewNote = this.toggleAddNewNote.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  toggleShowArchive() {
    const newState = !(this.state.showArchive);
    this.setState({ showArchive: newState });
  }

  toggleArchiveItem(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        note.archived = !(note.archived);
      }
      return note;
    });
    this.setState({ notes });
  }

  toggleAddNewNote() {
    const newState = !(this.state.onAddNewNote);
    this.setState({ onAddNewNote: newState });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          {
            id: +new Date(),
            title,
            body,
            createdAt: showFormattedDate(+new Date()),
            archived: false,
          },
          ...prevState.notes,
        ]
      }
    })
  }

  onSearchHandler(keyword) {
    this.setState({ searchKeyword: keyword });
  }

  render() {
    let modalNewNote = null;
    if (this.state.onAddNewNote) {
      modalNewNote = <FormNewNote onAddNoteHandler={this.onAddNoteHandler} toggleAddNewNote={this.toggleAddNewNote} />
    }

    return (
      <div className='note-app__container--center'>
        {modalNewNote}
        <Header />
        <NavigationBar
          toggleShowArchive={this.toggleShowArchive}
          showArchiveState={this.state.showArchive}
          toggleAddNewNote={this.toggleAddNewNote}
          onSearchHandler={this.onSearchHandler}
        />
        <NoteList
          notes={this.state.notes}
          onDelete={this.onDeleteHandler}
          toggleArchive={this.toggleArchiveItem}
          showArchiveState={this.state.showArchive}
          searchKeyword={this.state.searchKeyword}
        />
        <Footer />
      </div>
    );
  }
}

export default NoteApp;