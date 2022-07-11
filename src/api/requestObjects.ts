import { HttpPayload } from "@/redux/reducers/http/httpSlice";
import { endpoints } from "@/api/endpoints";
import { NoteFilterParams, NoteFormParams } from '@/types';

export const requestObjects = {
  note: {
    list: function (params: NoteFilterParams): HttpPayload {
      return {
        url: endpoints.note.list(params),
        method: "get",
        useBearerToken: true,
      };
    },

    create: function (data: NoteFormParams): HttpPayload {
      return {
        url: endpoints.note.create(),
        method: "post",
        body: data,
        useBearerToken: false,
      };
    },

    update: function (data: NoteFormParams): HttpPayload {
      return {
        url: endpoints.note.update(data?.id),
        method: "put",
        body: data,
        useBearerToken: false,
      };
    },

    delete: function (id: NoteFormParams['id']): HttpPayload {
      return {
        url: endpoints.note.update(id),
        method: "delete",
        useBearerToken: false,
      };
    },
  },
};