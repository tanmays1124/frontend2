import React from "react";
import { Link } from "react-router-dom";




const Navbar = ({ token, setToken, user, setUser, setLogged, page }) => {
  const handleLogout = () => {
    console.log("log out");
    setToken("");
    setLogged(false);
  };
  let history=''
  let home=''
  let dashboard=''
  if(page=='History'){
    history='active';
    home='';
  }
  if(page=='Home'){
    history='';
    home='active';
  }

return(
  <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" >
  <div className="container-fluid">
    <Link className="navbar-brand" to="/home">QuizViz</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
    
      <ul className="nav navbar-nav fs-5">
        <li className="nav-item">
          <Link className={`nav-link ${home}`} aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${dashboard}`} to="/dashboard">Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${history}`} to="/history">History</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Profile
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/login" onClick={handleLogout}>Logout</Link></li>
            <li><Link className="dropdown-item" to="#">Edit Profile</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </>
)
};


export default Navbar;

// const Navbar = ({ token, setToken, user, setUser, setLogged }) => {
//   const handleClick = () => {
//     console.log("log out");
//     setToken("");
//     setLogged(false);
//   };
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg bg-body-tertiary text-dark ">
//         <div className="container-fluid">
//           <Link className="navbar-brand text-dark" to="/home">
//             QuizViz
//           </Link>jyhjnhnh111101010100101
//           <Link className="navbar-brand text-dark" to="/home">
//             {user}
//           </Link>
//           <button
//             className="navbar-toggler text-dark"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link
//                   className="nav-link active text-dark"
//                   aria-current="page"
//                   to="/home"
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link text-dark" to="/history">
//                   History
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link text-dark" to="/dashboard">
//                   Dashboard
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link text-dark" to="/leaderboard">
//                   Leaderboard
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link
//                   className="nav-link text-dark"
//                   to="/login"
//                   onClick={handleClick}
//                 >
//                   Logout
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;
