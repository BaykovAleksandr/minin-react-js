import { useState, useEffect } from "react";
import logo from "/logo-name.svg";

export default function Header() {
  const [dateType, setDateType] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => setDateType(new Date()), 1000);

    return () => clearInterval(timerID);
  }, []);

  return (
    <div>
      <header>
        <img src={logo} alt={"result"} />
        <span>Здесь будет время: {dateType.toLocaleTimeString()}</span>
      </header>
    </div>
  );
}
