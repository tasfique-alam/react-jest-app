export interface HttpStateData<Data> {
  loading: boolean,
  success: boolean,
  error: any,
  data: Data,
}

export interface HttpState {
  // note
  noteList: HttpStateData<any>,
  noteCreate: HttpStateData<any>,
  noteUpdate: HttpStateData<any>,
  noteDelete: HttpStateData<any>,

  // blog
  blogList: HttpStateData<any>,
  blogCreate: HttpStateData<any>,
  blogUpdate: HttpStateData<any>,
  blogDelete: HttpStateData<any>,
}

function createStateObject<D>(data: D) {
  return {
    loading: false,
    success: false,
    error: null,
    data,
  };
}

export const httpInitialState: HttpState = {
  // note
  noteList: createStateObject(null),
  noteCreate: createStateObject(null),
  noteUpdate: createStateObject(null),
  noteDelete: createStateObject(null),

  // blog
  blogList: createStateObject(null),
  blogCreate: createStateObject(null),
  blogUpdate: createStateObject(null),
  blogDelete: createStateObject(null),
};
