import React from 'react';
import { connect } from 'react-redux';
import { changeInput } from '../redux/actions/changeInput.js'
import './Editor.css'

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.props.changeInput(event.target.value);
  }

render() {

  return (
    <div className="editor-wrapper">
      <header><h2>Markdown Editor</h2></header>
      <div className="textarea-container">
        <textarea id="editor" className="editorInput" type="text" onChange={(event) => this.handleChange(event)} value={this.props.editorText}></textarea>
      </div>
    </div>
  );

}

}

//Redux

const mapStateToProps = (state) => {
  return {
    editorText: state.editorText
  }
}


export default connect(mapStateToProps, { changeInput })(Editor);