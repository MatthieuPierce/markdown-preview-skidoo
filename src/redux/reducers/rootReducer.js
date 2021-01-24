import { CHANGETEXT } from '../constants.js';
import markdownQuickReference from '../../markdownQuickReference';

const startingState = {
  editorText: markdownQuickReference
}

const rootReducer = function(state = startingState, action) {
  switch (action.type) {
     case CHANGETEXT:
      return { 
        editorText: action.newEditorText
      }
     default:
       return state;
    }
  
}

export default rootReducer;