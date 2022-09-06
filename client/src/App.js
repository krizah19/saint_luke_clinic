import './App.css';
import './index.css';
import Home from './Components/home';

import { BrowserRouter , Routes , Route, HashRouter } from 'react-router-dom';

function App() {
  return(
    <Routes>
    <Route path='' element={<Home/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>
    
   </Routes>
  )
}

export default App;
