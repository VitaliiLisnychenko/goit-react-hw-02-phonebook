export const ContactItem = ({ id, name, number, handleDelete }) => {
  return (
    <>
      {name}: {number}
      <button type="button" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </>
  );
};
