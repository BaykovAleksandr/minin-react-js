import Header from "./components/Header";

import TeachingSection from "./components/TeachingSection.jsx";
import DifferenceSection from "./components/DifferenceSection.jsx";
import IntroSection from './components/IntroSection.jsx';
import TabsSection from './components/TabsSection.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TabsSection />
        <TeachingSection />
        <DifferenceSection />
      </main>
    </>
  );
}

export default App;
