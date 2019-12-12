import {ADD_NOTE,REMOVE_NOTE} from '../types'

export function addNote(title, content) {
  return { type:ADD_NOTE, title,  content };
}
export function removeNote(id) {
  return {type:REMOVE_NOTE, id };
}
