// import react from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
// import Navbar from './components/Navbar'
import History from './components/History'
import Registration from './components/Registeration'
import Login from './components/Login'
import Logout from './components/Logout'
import Landing from './components/Landing'
import Quiz from './components/Quiz';

import { useState } from 'react';  




const App =() => {
  const [token,setToken] = useState("");
  const [user, setUser] = useState("")
  const [question, setQuestion] = useState([])

    return (
        <Router>
            <html lang="en">
                <head>
                    <meta charSet="UTF-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"/>
                    <title>Bootstrap Cards</title>
                </head>
                <body >
                <Routes>
                    <Route path="/" exact element={<Landing/>}/>
                    <Route path="/login" exact element={<Login token={token} setToken={setToken} user={user} setUser={setUser} />} />
                    <Route path="/home" exact element={<Home token={token} setToken={setToken} user={user} setUser={setUser} question={question} setQuestion={setQuestion}/>} />
                    <Route path="/history" exact element={<History user={user} setUser={setUser}/>}/>
                    <Route path="/register" exact element={<Registration/>}/>
                    <Route path="/login" exact element={<Login token={token} setToken={setToken} user={user} setUser={setUser}/>}/>
                    <Route path="/quiz" exact element={<Quiz question={question} setQuestion={setQuestion}/>}/>

                    
                </Routes>
                
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
                </body>
            </html>
        
        </Router>
    );
}


export default App;






