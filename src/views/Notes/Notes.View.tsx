import React, { useState } from 'react';
import { NoteForm, NoteList } from '@/components/molecules';
import { NoteFormParams } from '@/types';

const NotesView = () => {
  const [editNote, setEditNote] = useState<NoteFormParams | null>(null);

  return (
    <div>
      <div style={{
        display: 'flex',
      }}>
        <div>
          <NoteList onEdit={(note) => setEditNote(note)} />
        </div>
        <div>
          <NoteForm data={editNote} />
        </div>
      </div>
    </div>
  );
};

export { NotesView };
