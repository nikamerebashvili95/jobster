function FormRow({ type, name, value, handleChage, labelText }) {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {name}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChage}
        className="form-input"
      />
    </div>
  );
}

export default FormRow;
