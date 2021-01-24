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

    <textarea id="editor" className="editorInput" type="text" onChange={(event) => this.handleChange(event)} value={this.props.editorText}></textarea>


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