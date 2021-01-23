import { CHANGETEXT } from '../constants.js'

export const changeInput = (valueFromEvent) => {
  return {
    type: CHANGETEXT,
    newEditorText: valueFromEvent
  }

}