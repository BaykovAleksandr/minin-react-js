import logo from "/logo-name.svg";


const now = new Date();



export default function Header() {
  return (
    <div>
      <header>
        <img src={logo} alt={"result"} />
        <span>Здесь будет время: {now.toLocaleTimeString()}</span>
      </header>
    </div>
  );
}
