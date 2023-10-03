import css from './ContactItem.module.css';

export const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <div className={css.contact}>
      {name}: {number}
      <button
        className={css.button}
        type="button"
        title={`Delete ${name}?`}
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </div>
  );
};
