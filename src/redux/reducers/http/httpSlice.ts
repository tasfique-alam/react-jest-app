import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AppState} from "@/redux/store";
import {AxiosRequestConfig} from 'axios';
import {apiClient} from "@/api";
import {HttpState, httpInitialState} from "./httpInitialState";

export interface HttpPayload {
    url: string;
    method: 'get' | 'post' | 'put' | 'delete' | 'patch';
    params?: any;
    body?: any;
    headers?: AxiosRequestConfig['headers'];
    useBearerToken?: boolean,
    extra?: {
        absolutePath?: boolean;
        dontResetDefault?: boolean;
    };
}

export interface HttpAction {
    correlationKey: keyof HttpState;
    response?: any;
    error?: any;
    payload: HttpPayload;
}

export const performHttpCall = createAsyncThunk(
    "http/sendRequest",
    async (payload: HttpAction) => {
        const {payload: httpPayload} = payload;
        return await apiClient[httpPayload?.method]({
            url: httpPayload?.url,
            useBearerToken: httpPayload?.useBearerToken,
            params: httpPayload?.params,
            data: httpPayload?.body,
        });
    }
);

export const httpSlice = createSlice({
    name: "http",
    initialState: httpInitialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(performHttpCall.pending, (state, {meta}) => {
            (state as any)[meta.arg.correlationKey] = {
                ...(state as any)[meta.arg.correlationKey],
                success: true,
                loading: true,
                error: null,
            };
        });
        builder.addCase(performHttpCall.rejected, (state, {meta, error}) => {
            (state as any)[meta.arg.correlationKey] = {
                ...(state as any)[meta.arg.correlationKey],
                loading: false,
                success: false,
                error,
            };
        });
        builder.addCase(performHttpCall.fulfilled, (state, {meta, payload}) => {
            (state as any)[meta.arg.correlationKey] = {
                ...(state as any)[meta.arg.correlationKey],
                loading: false,
                success: false,
                error: null,
                data: payload?.data,
            };
        });
    }
});

export const selectHttpState = (state: AppState) => state.http;
//export const {} = httpSlice.actions;

export default httpSlice.reducer;
