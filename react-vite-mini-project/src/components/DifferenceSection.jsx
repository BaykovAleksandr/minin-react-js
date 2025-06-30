import Button from "./Button/Button";
import { differences } from "../data";
import { useState } from "react";

export default function DifferenceSection() {
  const [contentType, setContentType] = useState(null);

  function handleClick(type) {
    setContentType(type);
  }
  return (
    <section>
      <h3>Чем мы отличаемся от других</h3>
      <Button
        isActive={contentType === "way"}
        buttonClick={() => handleClick("way")}
      >
        {" "}
        Подход{" "}
      </Button>
      <Button
        isActive={contentType === "easy"}
        buttonClick={() => handleClick("easy")}
      >
        {" "}
        Подход{" "}
      </Button>
      <Button
        isActive={contentType === "program"}
        buttonClick={() => handleClick("program")}
      >
        {" "}
        Подход{" "}
      </Button>

      <p>{contentType && differences[contentType]}</p>
      <p>{!contentType && "нажми на кнопку"}</p>
    </section>
  );
}
