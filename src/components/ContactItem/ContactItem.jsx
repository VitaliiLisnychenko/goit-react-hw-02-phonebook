export const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <>
      {name}: {number}
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </>
  );
};
