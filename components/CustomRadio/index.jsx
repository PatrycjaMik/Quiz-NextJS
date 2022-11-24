export default function CustomRadio({ selected, htmlFor }) {
  return (
    <label htmlFor={htmlFor}>
      <div className="h-4 w-4 rounded-full bg-[white] flex justify-center items-center cursor-pointer">
        {selected && <div className="h-4 w-4 bg-black rounded-full"></div>}
      </div>
    </label>
  );
}
