import React, { useState } from 'react';
import Box from '@mui/material/Box';
import BarGraph from './pages/BarGraph';
import LineGraph from './pages/LineGraph';
import "./pages/Dash.css";
import Navbar from "./Navbar";

function Dashboard({ userId }) {
  return (
    <>
      <div className='bo'>
        <Box sx={{ display: 'flex' }}>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <div className="App">
              <Navbar page={"Dashboard"} />
              <div className='das'>
                <h1>
                  Dashboard <i className="fas fa-tachometer-alt"></i>
                </h1>
              </div>
              <div className="card-container-1" style={{ display: 'flex' }}>
                <div className="card-1">
                  <LineGraph userId={userId} />
                </div>
                <div className="card-1">
                  <BarGraph userId={userId} />
                </div>
              </div>
            </div>
          </Box>
        </Box>
      </div>
    </>
  );
}

export default Dashboard;
