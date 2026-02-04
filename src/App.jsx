import DashboardLayout from "./layout/DashboardLayout";
import './App.css'
import { useState } from 'react';
import { BrowserRouter,Route,Navigate ,Routes }  from "react-router-dom";
import Login from  "./pages/Login";

function App() {
   const [IsLoggedIn,setIsLoggedIn]=useState(false)
 return(

    <BrowserRouter>
      <Routes>
        <Route path="/" element={IsLoggedIn ? <Navigate to="/dashboard" /> : <Navigate to="/Login" />} />
        <Route path="/Login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/dashboard" element={IsLoggedIn ? <DashboardLayout /> : <Navigate to="/Login" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        
      </Routes>

    </BrowserRouter>
   
 );
  
}

export default App;
