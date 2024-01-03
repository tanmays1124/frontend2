// import react from 'react';
import React, { useState, useEffect } from 'react';
import './Home.css';
import linux from '../images/linux.jpg';
import sql from '../images/sql.jpg';
import ml from '../images/ml.jpg';
import html from '../images/html.jpg';
import Loading from './Loading';

const Cards = (props) => {


    const [isLoading, setIsLoading] = useState(true);
    
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

<div className="col-lg-3 col-md-4 col-sm-6">
            <div className="card">
                <img src={props.image} className="card-img-top" alt="title"/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">This is a sample card with some content.</p>
                   
                </div>
            </div>
        </div>
</>
    );
}


const Home =() => {
    return (
        <>

            <div className="container"> 
                <div className="row">
                    <Cards title={'Linux'} image={linux} />
                    <Cards title={'SQL'} image={sql} />
                    <Cards title={'AI/ML'} image={ml} />
                    <Cards title={'HTML'} image={html} />

                </div>
            </div>

        </>

    );
}


export default Home;