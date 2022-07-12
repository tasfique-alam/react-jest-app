import React, { useEffect, useState } from 'react';
import { deleteNote, getMyNotes } from '@/redux/actions/noteActions';
import { useAppSelector } from '@/hooks';
import { selectHttpState } from '@/redux/reducers/http/httpSlice';
import { NoteFormParams } from '@/types';

interface NoteListProps {
  onEdit?(data: NoteFormParams): void,
}

const NoteList: React.FC<NoteListProps> = ({onEdit}) => {
  const [search, setSearch] = useState('');
  const {noteList: notesState, noteDelete} = useAppSelector(selectHttpState);
  const {loading, success, data: notes} = notesState;
  const {success: deleteSuccess, loading: deleteLoading} = noteDelete;

  const getNotes = () => getMyNotes({
    search,
  });

  useEffect(() => {
    getNotes();
  }, []);

  useEffect(() => {
    if (deleteSuccess) {
      alert("Deleted successfully!");
      getNotes();
    }
  }, [deleteSuccess]);

  return (
    <div>
      <div>
        <input
          type={"search"}
          placeholder={"Search"}
          value={search}
          onChange={(e: any) => setSearch(e.target.value)}
        />
      </div>

      <div>
        {deleteLoading && (
          <h4>Deleting...</h4>
        )}

        {loading ? (
          <h2>Loading</h2>
        ) : (
          <table>
            <thead>
            <tr>
              <th>id</th>
              <th>Title</th>
              <th>Description</th>
            </tr>
            </thead>
            <tbody>
            {notes && notes?.length > 0 && notes?.map((item: any, index: number) => (
              <tr key={index}>
                <td>{item?.id}</td>
                <td>{item?.title}</td>
                <td>{item?.body}</td>
                <td>
                  <button onClick={() => {
                    if (onEdit) {
                      onEdit(item);
                    }
                  }}>Edit
                  </button>

                  <button onClick={() => {
                    if (window.confirm("Are you sure?")) {
                      deleteNote(item?.id);
                    }
                  }}>Delete
                  </button>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export { NoteList };
