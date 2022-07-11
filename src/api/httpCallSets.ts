import { performHttpCall } from "@/redux/reducers/http/httpSlice";
import { requestObjects } from "@/api/requestObjects";
import { NoteFilterParams, NoteFormParams } from '@/types';

export const httpCallSets = {
  note: {
    list: (params: NoteFilterParams) => performHttpCall({
      correlationKey: "noteList",
      payload: requestObjects.note.list(params),
    }),

    create: (params: NoteFormParams) => performHttpCall({
      correlationKey: "noteCreate",
      payload: requestObjects.note.create(params),
    }),

    update: (params: NoteFormParams) => performHttpCall({
      correlationKey: "noteUpdate",
      payload: requestObjects.note.update(params),
    }),

    delete: (id: NoteFormParams['id']) => performHttpCall({
      correlationKey: "noteDelete",
      payload: requestObjects.note.delete(id),
    }),
  },
};