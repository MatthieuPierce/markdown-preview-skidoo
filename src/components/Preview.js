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
    let lineBreakRegex = new RegExp(`(?<=[\w.!?\\-\*\s])[\n\r\f\v]`, 'gi');
    let carriageFixed = content.replace(lineBreakRegex, `<br />`);
    // let carriageFixed = content;
    return {
      __html: DOMPurify.sanitize(marked(carriageFixed))
    }
  }

  render() {
    return (
      <div id="preview-wrapper">
        <header>
          <h2>Markdown Preview</h2>
        </header> 
        <div id="preview" dangerouslySetInnerHTML={this.produceMarkup(this.props.editorText)}></div>
        <div><h2>raw editorText</h2>
         <code>{this.props.editorText}</code>
        </div>
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