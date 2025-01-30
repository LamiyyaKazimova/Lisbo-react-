import './App.scss';
import { Header } from './components/Header/Header';
import { Section } from './components/Section/Section';
import { Demos } from './components/Demos/Demos';
import { DemoLogins } from './components/DemoLogins/DemoLogins';
import { Function } from './components/Functions/Function';
import { Features } from './components/Features/Features';
import { Support } from './components/Support/Support';
function App() {
  return (
    <div className="App">
      <Header/>
      <Section/>
      <Demos/>
      <DemoLogins/>
      <Function/>
      <Features/>
      <Support/>
      
    </div>
  );
}

export default App;
