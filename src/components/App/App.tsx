import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import css from './App.module.css';

import NoteList from '../NoteList/NoteList';
import Pagination from '../Pagination/Pagination';
import Modal from '../Modal/Modal';
import NoteForm from '../NoteForm/NoteForm';
import SearchBox from '../SearchBox/SearchBox';

export default function App() {
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // search states
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  const perPage = 12;

  // debounce (обов’язково в App)
  const debounced = useDebouncedCallback((value: string) => {
    setDebouncedSearch(value);
    setPage(1); // важливо: при пошуку повертаємось на першу сторінку
  }, 500);

  const handleSearch = (value: string) => {
    setSearch(value);
    debounced(value);
  };

  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        <SearchBox value={search} onChange={handleSearch} />

        <button
          className={css.button}
          onClick={() => setIsModalOpen(true)}
        >
          Create note +
        </button>
      </header>

      <NoteList
        page={page}
        perPage={perPage}
        search={debouncedSearch}
      />

      <Pagination
        page={page}
        setPage={setPage}
      />

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <NoteForm onClose={() => setIsModalOpen(false)} />
        </Modal>
      )}
    </div>
  );
}