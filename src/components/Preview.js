import React from 'react';
import { connect } from 'react-redux';
import marked from 'marked';
import DOMPurify from 'dompurify';
import './Preview.css'

class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.produceMarkup = this.produceMarkup.bind(this);
  }

  produceMarkup = (content) => {
    let markedOptions = {
      breaks: true
    }
    return {
      __html: DOMPurify.sanitize(marked(content, markedOptions))
    }
  }

  render() {
    return (
      <div className="preview-wrapper">
        <header className="preview-header">
          <h2>Markdown HTML Preview</h2>
        </header> 
        <div id="preview" dangerouslySetInnerHTML={this.produceMarkup(this.props.editorText)}></div>
        {/* <div><h2>raw editorText</h2>
         <code>{this.props.editorText}</code>
        </div> */}
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