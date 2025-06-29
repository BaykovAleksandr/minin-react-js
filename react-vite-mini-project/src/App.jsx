import Header from './components/Header' 
import { ways } from "./data.js";
import WayToTeach from './components/WayToTeach.jsx';
import Button from './components/Button/Button.jsx';



function App() {
  function handleClick(type) {
    console.log('button clicked', type);
    
  }
  return (
    <>
      <Header />
      <main>
        <h1>React</h1>
        <section>
          <ul>
            <WayToTeach
              title={ways[0].title}
              description={ways[0].description}
            />
            <WayToTeach {...ways[1]} />
            <WayToTeach {...ways[2]} />
          </ul>
        </section>
        <section>
          <h3>Чем мы отличаемся от других</h3>
          <Button buttoonClick={() => handleClick("Way")}> Подход </Button>
          <Button buttoonClick={() => handleClick("Easy")}> Подход </Button>
          <Button buttoonClick={() => handleClick("Program")}> Подход </Button>
        </section>
      </main>
    </>
  );
}

export default App;
