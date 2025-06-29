import Header from './components/Header' 
import { ways } from "./data.js";

function WayToTeach(props) {
  return (
    <li>
      <p>
        <strong>
          {props.title}
        </strong>
        {props.description}
      </p>
    </li>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <h1>React</h1>
        <section>
          <ul>
            <WayToTeach
              title={ways[3].title}
              description={ways[0].description}
            />
            <WayToTeach
              title={ways[1].title}
              description={ways[1].description}
            />
            <WayToTeach
              title={ways[2].title}
              description={ways[2].description}
            />
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
