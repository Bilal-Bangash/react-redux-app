import { ADD_NOTE, REMOVE_NOTE } from "../types";
const initialState = {
  notes: []
};
export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return {
        notes: [
          ...state.notes,
          {
            title: action.title,
            content: action.content
          }
        ]
      };
      case REMOVE_NOTE:
      return {
        notes: state.notes.filter((note, index) => index !== action.id)
      };
    default:
        return state;
  }
}
