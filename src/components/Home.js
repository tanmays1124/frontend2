// import react from 'react';
import './Home.css';
import linux from '../images/linux.jpg';
import sql from '../images/sql.jpg';
import ml from '../images/ml.jpg';
import html from '../images/html.jpg';
import CustomModal from './Modal';
import React, { useState } from "react";
import Navbar from './Navbar';
// import Select from "react-dropdown-select";

const Cards = (props) => {
    const [isModalOpen, setModalOpen] = useState(false);

const openModal = () => {
  setModalOpen(true);
};

const closeModal = () => {
  setModalOpen(false);
};

    return(
        <>

<div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card">
                <img src={props.image} className="card-img-top" alt="title"/>
                <div className="card-body">
                    <h5 className="card-title"><a href="#" onClick={openModal}>{props.title}</a></h5>
                    <p className="card-text">{props.content}</p>
                        <CustomModal
                        isOpen={isModalOpen}
                        closeModal={closeModal}
                        content="LINUX Quiz"/>                       

                   
                </div>
            </div>
        </div>
</>
    );
}


const Home =({user, setUser, token, setToken, setLogged}) => {
    return (
        <>
        <Navbar user={user} setUser={user} token={token} setToken={setToken} setLogged = {setLogged}/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"/>

            <div className="container">
                <div className="row">
                    <Cards title={'Linux'} image={linux} content={"Click to begin attempt on Linux and it's sub-domain topics."}/>
                    <Cards title={'SQL'} image={sql} content={"Click to begin attempt on SQL and it's sub-domain topics."}/>
                    <Cards title={'AI/ML'} image={ml} content={"Click to begin attempt on AI/ML and it's sub-domain topics."}/>
                    <Cards title={'HTML'} image={html} content={"Click to begin attempt on HTML and it's sub-domain topics."}/>

                </div>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>

        </>

    );
}


export default Home;