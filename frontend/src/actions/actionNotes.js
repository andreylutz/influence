export const SET_NOTES = 'SET_NOTES';
export const REMOVE_NOTES = 'REMOVE_NOTES';
export const ADD_NOTE = 'ADD_NOTE';

export const actionNotes = {
  setNotes: (notes) => ({
    type: SET_NOTES,
    payload: notes,
  }),
  removeNotes: (id) => ({
    type: REMOVE_NOTES,
    payload: id,
  }),
  addNote: (note) => ({
    type: ADD_NOTE,
    payload: note,
  }),
};
