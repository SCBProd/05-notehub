import css from './NoteList.module.css';
import { useQuery, useQueryClient } from '@tanstack/react-query';



const API_URL = 'https://notehub-public.goit.study/api/notes';
const TOKEN = import.meta.env.VITE_NOTEHUB_TOKEN;

export default function NoteList({ page, perPage, search }) {
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ['notes', page, perPage, search],
    queryFn: async () => {
      const res = await fetch(
        `${API_URL}?page=${page}&perPage=${perPage}&search=${search}`,
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      );

      if (!res.ok) {
        throw new Error('Failed to fetch notes');
      }

      return res.json();
    },
    keepPreviousData: true,
  });

  const notes = data?.notes ?? [];

  const handleDelete = async (id) => {
    await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    queryClient.invalidateQueries({ queryKey: ['notes'] });
  };

  if (!notes.length) {
    return null;
  }

  return (
    <ul className={css.list}>
      {notes.map(note => (
        <li key={note.id} className={css.listItem}>
          <h2 className={css.title}>{note.title}</h2>

          <p className={css.content}>{note.content}</p>

          <div className={css.footer}>
            <span className={css.tag}>{note.tag}</span>

            <button
              className={css.button}
              onClick={() => handleDelete(note.id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}