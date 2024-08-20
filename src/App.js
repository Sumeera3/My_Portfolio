import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router';
import Header from './components/Header';
import Body from './components/Body';
import './components/Style.css';
function App() {
  return (
    <>
    {/* <Header></Header> */}
    <Body></Body>
    
      {/* <Routes path='/header' element={<Header></Header>}></Routes> */}
      
    </>
  );
}

export default App;
