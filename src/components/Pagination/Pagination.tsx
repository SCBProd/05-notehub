import css from './Pagination.module.css';
type Props = {
  page: number;
  setPage: (page: number) => void;
};

export default function Pagination({ page, setPage }: Props) {
  return (
    <div className={css.pagination}>
      <button onClick={() => setPage(page - 1)}>Prev</button>

      <span>{page}</span>

      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
}