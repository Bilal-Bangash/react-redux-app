import React, { Component } from "react";
import {connect} from 'react-redux';
import {addNote} from '../redux/actions/action'
class NotesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: ""
    };
  }
  handleChange = (e) => {
      this.setState({[e.target.name]:e.target.value});
  };
  handleSubmit = (e) => {
      e.preventDefault();
      const {title,content}=this.state;
      this.props.addNote(title,content);
      this.setState({ title: '', content: '' });
  };

  render() {
    return (
      <React.Fragment>
        <h3>Add a Notes</h3>
        <form onSubmit={this.handleSubmit}>
          Title : <br />
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <br />
          Content : <br />
          <textarea
            name="content"
            value={this.state.content}
            onChange={this.handleChange}
          ></textarea>
          <br />
          <button type="submit">Add Note</button>
        </form>
      </React.Fragment>
    );
  }
}
export default connect(null,{addNote:addNote}) (NotesForm);
