import "./Button.css";

export default function Button({ children, buttonClick }) {
    console.log("click");


  const handleMouseEnter = () => console.log("enter");

  return (
    <button
      className="button"
      onClick={buttonClick}
      onMouseEnter={handleMouseEnter}
      onDoubleClick={() => console.log("dblclick")}
    >
      {children}
    </button>
  );
}
