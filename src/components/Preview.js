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
    let lineBreakRegex = new RegExp(`(?<=[\w.!?\\-])[\n\r\f]`, 'gi');
    let carriageFixed = content.replace(lineBreakRegex, `<br />`);
    // let carriageFixed = content;
    return {
      __html: DOMPurify.sanitize(marked(carriageFixed))
    }
  }

  render() {
    return (
      <div > 
        <h2>Markdown Preview</h2>
        <div id="preview" dangerouslySetInnerHTML={this.produceMarkup(this.props.editorText)}></div>
        <h2>Raw editorText</h2>
        <div id="rawEditorText">{this.props.editorText}</div>
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