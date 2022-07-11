import {
  apiClient,
  endpoints,
} from '@/api';
import { NoteFormParams } from '@/types';

export const requests = {
    public: {
        login: async function (data: {
            phone?: string,
            password?: string,
        }) {
            return apiClient.post({
                url: endpoints.public.login,
                data,
                useBearerToken: false,
            });
        },
    },

    note: {
        /*save(data: NoteFormParams) {
            return apiClient.post({
                url: endpoints.note.save(),
                data,
            });
        }*/
    }
};
