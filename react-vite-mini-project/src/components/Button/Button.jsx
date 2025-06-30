import "./Button.css";

export default function Button({ children, buttonClick, isActive }) {
    console.log("click");


  const handleMouseEnter = () => console.log("enter");

  return (
    <button
      className={isActive ? 'button active': 'button'}
      onClick={buttonClick}
      onMouseEnter={handleMouseEnter}
      onDoubleClick={() => console.log("dblclick")}
    >
      {children}
    </button>
  );
}
