import { store } from '@/redux/store';
import { httpCallSets } from '@/api';
import { NoteFilterParams, NoteFormParams } from '@/types';

export function getMyNotes(params: NoteFilterParams) {
  store.dispatch(
    httpCallSets.note.list(params)
  );
}

export function createNote(data: NoteFormParams) {
  store.dispatch(
    httpCallSets.note.create(data)
  );
}

export function updateNote(data: NoteFormParams) {
  store.dispatch(
    httpCallSets.note.update(data)
  );
}

export function deleteNote(id: NoteFormParams['id']) {
  store.dispatch(
    httpCallSets.note.delete(id)
  );
}