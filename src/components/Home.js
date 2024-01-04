// import react from 'react';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

import './Home.css';
import linux from '../images/linux.jpg';
import sql from '../images/sql.jpg';
import ml from '../images/ml.jpg';
import html from '../images/html.jpg';
import Loading from './Loading';
import Navbar from './Navbar';

const Cards =  React.memo((props) => {


    const [isLoading, setIsLoading] = useState(true);

    const [domain, setDomain] = useState('')


 
    useEffect(() => {
      // Simulate an API call
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }, []);
  
    if (isLoading) {
      return <Loading />;
}


    return(
        <>
<div className="col-lg-3 col-md-4 col-sm-6" onClick={props.onClick}>
            <div className="card">
                <img src={props.image} className="card-img-top" alt="title"/>
                <div className="card-body">
                    <h5 id='title' className="card-title">{props.title}</h5>
                    <p className="card-text">This is a sample card with some content.</p>
                   
                </div>
            </div>
        </div>
</>
    );
}
);

const Home =({token,setToken,user,setUser,question, setQuestion}) => {

    const navigate = useNavigate();
    function handleCardClick(title) {
        setQuestion(['Ef','wed'])
        navigate('/quiz')
      }
    




    return (
        <>
            <Navbar token={token} setToken={setToken} user={user} setUser={setUser}/>

            <div className="container">
                <div className="row">
                    <Cards title={'Linux'} image={linux} onClick={() => handleCardClick("linux")}   />
                    <Cards title={'SQL'} image={sql} />
                    <Cards title={'AI/ML'} image={ml} />
                    <Cards title={'HTML'} image={html} />

                </div>
            </div>

        </>

    );
}


export default Home;