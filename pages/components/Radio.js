export default function Radio({
  question,
  options,
  id,
  value,
  active,
  onChange,
}) {
  if (active === false) return null;
  return (
    <fieldset>
      <legend style={{ fontWeight: 'bold' }}>{question}</legend>
      {options.map(option => (
        <label htmlFor="" key={option}>
          <input
            type="radio"
            id={id}
            checked={value === option}
            value={option}
            onChange={onChange}
          />
          {option}
        </label>
      ))}
    </fieldset>
  );
}
