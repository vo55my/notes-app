import React from "react";

function NavigationShowArchiveButton({ toggleShowArchive, showArchiveState }) {
  if (showArchiveState) {
    return (
      <button className='btn navigation-bar__show-archive' onClick={() => toggleShowArchive()}>Back</button>
    );
  } else {
    return (
      <button className='btn navigation-bar__show-archive' onClick={() => toggleShowArchive()}>Archive</button>
    );
  }
}

export default NavigationShowArchiveButton;