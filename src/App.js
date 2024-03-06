
import './App.css';

import Login from './components/Login';
import {BrowserRouter as Router,Routes,Route,useNavigate} from 'react-router-dom'
import Main from './components/main';
import Admin from './components/admin';
import Protection from './components/protrction';
import { useEffect, useState } from 'react';
import MyComponent from './components/dleate';



function App() {
  
 const [user, setuser] = useState(true);
 

         
  return (
    <div  style={{marginTop:'-20px'}} className="App img">
      <Router>
        <Routes>
          
          <Route path="/main" element={<Main/>} />
          <Route path="/admin" element={<Admin/>} />
        
          
          <Route path="/" element={<Login />} />
          <Route path="/comp" element={<MyComponent/>} />
          
         
        </Routes>
      </Router>
     
      
    </div>
  );
}

export default App;
