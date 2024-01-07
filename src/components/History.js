import React from 'react';
import bg1 from '../images/history.jpg';
import Navbar from './Navbar';

const History = () => {
    const styles = {
        background: {
            backgroundImage: `url(${bg1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '50vh', // Adjust the height to make the image smaller
            width: '50vw',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            textAlign: 'center',
            fontSize: '24px',
            opacity: '0.7'

        },

        contained:{
            width:'100vw',
            height:'100vh',
            display: 'grid',
            placeItems: 'center',
            alignItems: 'center',

        },
        text:{
            fontSize: 'larger',
            color:'rgb(194 194 194)',
            marginBottom: '-100px'
        }
    };

    return (
        <>
        <Navbar page={'History'}/>
        <div className="contained" style={styles.contained}>
                    <div className='text' style={styles.text}>No history</div>

        <div className='background' style={styles.background}>
        </div>
        </div>
        </>
    );
}

export default History;
