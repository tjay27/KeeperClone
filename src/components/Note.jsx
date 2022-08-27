import React from "react";


function Note(props){
    return <div className="Note">
        <h1>{props.NoteTitle}</h1>
        <p>{props.NoteContent}</p>
    </div>;
}

export default Note;