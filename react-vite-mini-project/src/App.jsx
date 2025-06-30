import Header from './components/Header' 
import { ways, differences } from "./data";
import { useState } from 'react';
import WayToTeach from './components/WayToTeach.jsx';
import Button from './components/Button/Button.jsx';



function App() {

  const [content, setContent] = useState('PRESS ME');

  function handleClick(type) {
    setContent(type)
    //console.log('button clicked', type);
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
          <Button  buttonClick={() => handleClick("way")}> Подход </Button>
          <Button  buttonClick={() => handleClick("easy")}> Подход </Button>
          <Button  buttonClick={() => handleClick("program")}> Подход </Button>
        </section>

        <p>{differences[content]}</p>
      </main>
    </>
  );
}

export default App;
