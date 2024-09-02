export default function Input({ label, id, type, placeholder, handleChange }) {
  return (
    <label>
      {label}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </label>
  );
}
