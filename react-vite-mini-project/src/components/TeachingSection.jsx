import { ways } from "../data.js";
import WayToTeach from "./WayToTeach.jsx";

export default function TeachingSection() {
  return (
    <>
      <h1>React</h1>
      <section>
        <ul>
          {ways.map((item) => (
            <WayToTeach key={item.title} {...item} />
          ))}
        </ul>
      </section>
    </>
  );
}
