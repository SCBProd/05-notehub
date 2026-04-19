import css from './Pagination.module.css';

export default function Pagination({ page, setPage }) {
  return (
    <div className={css.pagination}>
      <button onClick={() => setPage(page - 1)}>Prev</button>

      <span>{page}</span>

      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
}