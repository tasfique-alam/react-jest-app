import React, { useEffect, useRef } from 'react';
import { Formik } from 'formik';
import { NoteFormParams } from '@/types';
import { createNote, getMyNotes, updateNote } from '@/redux/actions/noteActions';
import { useAppSelector } from '@/hooks';
import { selectHttpState } from '@/redux/reducers/http/httpSlice';

interface NoteFormProps {
  dataSet: NoteFormParams | null,
}

const NoteForm: React.FC<NoteFormProps> = ({ dataSet }) => {
  const { noteCreate, noteUpdate } = useAppSelector(selectHttpState);
  const { loading: createLoading, success: createSuccess } = noteCreate;
  const { loading: updateLoading, success: updateSuccess } = noteUpdate;

  const reloadNotes = () => getMyNotes({ search: '' });

  useEffect(() => {
    if (createSuccess) {
      reloadNotes();
      alert("Post created successfully!");
    }
  }, [createSuccess]);

  useEffect(() => {
    if (updateSuccess) {
      reloadNotes();
      alert("Post updated successfully!");
    }
  }, [updateSuccess]);

  return (
    <div>
      <Formik
        initialValues={{
          title: dataSet?.title,
          body: dataSet?.body,
          id: dataSet?.id
        }}
        enableReinitialize={true}
        onSubmit={async (values, formikProps) => {
          const { setSubmitting } = formikProps;

          const data: NoteFormParams = {
            title: values.title,
            body: values.body,
            id: values?.id
          };

          if (Number(data?.id) > 0) {
            updateNote(data);
          } else {
            createNote(data);
          }

          setSubmitting(false);
        }}
      >
        {(formikProps) => {
          const { values, handleChange, handleSubmit } = formikProps;
          return (
            <form onSubmit={handleSubmit}>
              <div>
                {createLoading && (
                  <h4>Creating post...</h4>
                )}

                {updateLoading && (
                  <h4>Saving post...</h4>
                )}
              </div>
              {dataSet?.id}
              <div>
                <input
                  type={"text"}
                  name={"id"}
                  placeholder={"Enter id"}
                  value={values.id}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type={"text"}
                  name={"title"}
                  placeholder={"Enter title"}
                  value={values.title}
                  onChange={handleChange}
                />
              </div>
              <div>
                <textarea
                  name={"body"}
                  placeholder={"Enter description"}
                  value={values.body}
                  onChange={handleChange}
                />
              </div>
              <div>
                <button
                  type={"submit"}
                >
                  Save
                </button>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export { NoteForm };
