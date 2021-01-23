import React from 'react';
import { connect } from 'react-redux';
import marked from 'marked';
import DOMPurify from 'dompurify';

class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.produceMarkup = this.produceMarkup.bind(this);
  }

  produceMarkup = (content) => {
    return {
      __html: DOMPurify.sanitize(marked(content))
    }
  }

  render() {
    return (
      <div > 
        <h2>Preview Div</h2>
        <div id="preview" dangerouslySetInnerHTML={this.produceMarkup(this.props.editorText)}></div>
        <p>asf</p>
      </div>
    )
  }
}

//Redux

const mapStateToProps = (state) => {
  return {
    editorText: state.editorText
  }
}


export default connect(mapStateToProps)(Preview);