
import { Link } from 'react-router-dom';
import './Landing.css';


const Landing = () =>{
    
    return(
        <>
            
<body>



<header>
    <Link id="logo" to="#">QuizViz</Link>
    <div id="nav-buttons">
        <Link id="login" to="/login">Login</Link>
        <Link id="signup" to="/register">Sign Up</Link>
    </div>
</header>

<section id="center-text">
    <h1>Welcome to QuizViz!</h1>
    <strong><p>Discover and explore the world of quizzes.</p></strong>
</section>

</body>
        </>
    )
}


export default Landing ; 