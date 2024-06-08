interface Props {
  label: string;
  handleOnChange?: (selection: string) => void;
  multiple?: boolean;
  values: string[];
  extraClasses?: string;
}
const Selection = ({
  label,
  values,
  handleOnChange = () => {},
  multiple = false,
  extraClasses,
}: Props) => {
  return (
    <div className={`mb-3 ${extraClasses}`}>
      <label className="form-label">{label}</label>
      <select
        className="form-select"
        multiple={!!multiple}
        onChange={(evt) => handleOnChange(evt.target.value)}
      >
        {values.map((element) => (
          <option key={element} value={element}>
            {element}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selection;