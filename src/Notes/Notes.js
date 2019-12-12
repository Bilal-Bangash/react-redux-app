import React, { Component } from 'react';
import NotesForm from './NotesForm';
import AllNotes from './AllNotes';
class Notes extends Component{
    render(){
        return(
            <React.Fragment>
                <h1>React Redux Notes Application</h1>
                <NotesForm/>
                <hr/>
                <AllNotes/>
            </React.Fragment>
        )
    }
}
export default Notes;