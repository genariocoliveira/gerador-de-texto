import "../globals.css";

const Input = ({ id, label, ...props }) => {
  return (
    <div className="">
      
      <label htmlFor={id} className="label-type">{label}<strong className="text-red-700 font-bold text-lg">*</strong></label>
      
      <div className="mt-1">

        <input type="text" id={id} {...props} className="input-type" />
      
      </div>

    </div>
  );
};
export default Input;
