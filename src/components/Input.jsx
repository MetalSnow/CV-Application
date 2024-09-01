export default function Input({ label, type, placeholder, handleChange }) {
  return (
    <label>
      {label}
      <input
        className="input"
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </label>
  );
}
