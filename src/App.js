// import react from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
// import Navbar from './components/Navbar'
import History from './components/History'
import Registration from './components/Registeration'
import Login from './components/Login'
import Logout from './components/Logout'
import { useState } from 'react';  




const App =() => {
  const [token,setToken]=useState("");
    return (
        <Router>
            <html lang="en">
                <head>
                    <meta charset="UTF-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"/>
                    <title>Bootstrap Cards</title>
                </head>
                <body >
                <Routes>
                    <Route path="/" exact element={<Home key={token} setKey={setToken} />}/>
                    <Route path="/history" exact element={<History/>}/>
                    <Route path="/register" exact element={<Registration/>}/>
                    <Route path="/login" exact element={<Login key={token} setKey={setToken} />}/>
                    {/* <Route path="/logout" exact element={<Logout key={token} setKey={setToken}/>}/> */}


                </Routes>
                
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
                </body>
            </html>
        
        </Router>
    );
}


export default App;






