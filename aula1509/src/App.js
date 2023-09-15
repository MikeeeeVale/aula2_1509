import OlaMundo from './components/olaMundo';
import Frases from './components/frases';
import logo from './logo.svg';
import './App.css';
import DigaMeuNome from './components/digaMeuNome';
import MinhaProfissao from './components/minhaProfissao';

function App() {
  return (
    <div className="container">
     <h1>Olá outro lado</h1>
     <OlaMundo/>
     <Frases/>
     <DigaMeuNome nome="Kaiser" profissao="Pintor" idade="26" cidade="Jacarazinho"/>
   
    </div>
  );
}

export default App;
