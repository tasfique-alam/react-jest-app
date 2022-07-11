import { NoteFilterParams, NoteFormParams } from '@/types';

export const endpoints = {
  public: {
    login: "/public/login",
  },

  note: {
    list: (params: NoteFilterParams) => `/posts?search=${params.search}`,
    create: () => `/posts`,
    update: (id: NoteFormParams['id']) => `/posts/${id}`,
    delete: (id: NoteFormParams['id']) => `/posts/${id}`,
  },

  blog: {
    list: () => `/blogs`,
    create: () => `/blog/create`,
    update: (id: NoteFormParams['id']) => `/blog/update/${id}`,
    delete: (id: NoteFormParams['id']) => `/blog/delete/${id}`,
  },
};