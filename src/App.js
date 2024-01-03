// // import react from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css';
// import Home from './components/Home'
// import Navbar from './components/Navbar'
// import History from './components/History'


// const App =() => {
//     return (
//         <Router>
//             <html lang="en">
//                 <head>
//                     <meta charset="UTF-8"/>
//                     <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
//                     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"/>
//                     <title>Bootstrap Cards</title>
//                 </head>
//                 <body>
//                 <Navbar/>
//                 <Routes>
//                     <Route path="/" exact element={<Home/>}/>
//                     <Route path="/history" exact element={<History/>}/>
//                 </Routes>
                
//                 <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
//                 </body>
//             </html>
        
//         </Router>
//     );
// }


// export default App;



import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api');
        
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
},[])
console.log(data)

    
  return (
    <div>
      <h1>Your React App</h1>
      <ul>
        {data.map((item) => (
          <li >{item.id} {item.username}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
