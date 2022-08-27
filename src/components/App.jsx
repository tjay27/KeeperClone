import React from "react";
import Heading from './Heading'
import Note from './Note'
import Footer from './Footer'
import NoteInfo from './NoteDetails'

function createNote(NoteInfo){
    return <Note 
        key={NoteInfo.NoteNo}
        NoteTitle={NoteInfo.NoteTitle}
        NoteContent={NoteInfo.NoteContent}
    />
}


function App(){
    return <div>
        <Heading />    
            {NoteInfo.map(createNote)}
        <Footer />
    </div>;

}

export default App;