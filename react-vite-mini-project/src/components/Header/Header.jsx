import { useState, useEffect } from "react";
import logo from "/logo-name.svg";
//import "./Header.css";
import {styled} from "styled-components";

const HeaderComponent = styled.header`
  height: 50px;
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background: #fafafa;
`;

export default function Header() {
  const [dateType, setDateType] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => setDateType(new Date()), 1000);

    return () => clearInterval(timerID);
  }, []);

  return (
    <div>
      <HeaderComponent>
        <img src={logo} alt={"result"} />
        <span>Здесь будет время: {dateType.toLocaleTimeString()}</span>
      </HeaderComponent>
    </div>
  );
}
