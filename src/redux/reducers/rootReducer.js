import { CHANGETEXT } from '../constants.js'

const startingState = {
  editorText: 'markup examples go here'
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