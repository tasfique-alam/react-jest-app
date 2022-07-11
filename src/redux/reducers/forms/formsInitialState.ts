export interface FormStateData<T> {
    open: boolean,
    formData: T,
}

export interface FormsState {
}

function createFormData<T>(data: T) {
    return {
        open: false,
        formData: data,
    };
}

export const formsInitialState: FormsState = {
}