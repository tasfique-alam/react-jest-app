import { NoteFilterParams, NoteFormParams } from '@/types';

export const endpoints = {
  public: {
    login: "/public/login",
  },

  note: {
    list: (params: NoteFilterParams) => `/notes`,
    create: () => `/notes/`,
    update: (id: NoteFormParams['id']) => `/notes/${id}/`,
    delete: (id: NoteFormParams['id']) => `/notes/${id}/`,
  },

  blog: {
    list: () => `/blogs`,
    create: () => `/blog/create`,
    update: (id: NoteFormParams['id']) => `/blog/update/${id}`,
    delete: (id: NoteFormParams['id']) => `/blog/delete/${id}`,
  },
};