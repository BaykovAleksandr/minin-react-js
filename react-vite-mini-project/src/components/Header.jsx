import { useState, useEffect } from "react";
import logo from "/logo-name.svg";

export default function Header() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => setDate(new Date()), 1000);

    return () => clearInterval(timerID);
  }, []);

  return (
    <div>
      <header>
        <img src={logo} alt={"result"} />
        <span>Здесь будет время: {date.toLocaleTimeString()}</span>
      </header>
    </div>
  );
}
