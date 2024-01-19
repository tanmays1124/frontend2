import { useState } from 'react';
import "./Profile.css";
import Navbar from './Navbar';
import pfimg from "../images/profile.jpg";

const Profile = () => {
    const [disable, setdisable] = useState(true)

    const handleUpdate = () =>
    {
        setdisable(false)
    }

    const handleSave = () =>{
        setdisable(true)
    }
  return (
    <>
    <Navbar/>
      <div className="container shadow rounded bg-secondary mt-5 mb-5 profile-container">
        <div className="row">
          <div className="col-md-4 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src={pfimg}
              />
              <span className="text-black-50">{localStorage.getItem('username')}</span>
              <span> </span>
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="text-right">Profile Settings</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="first name"
                    
                    disabled = {disable}
                    
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="last name"
                    disabled = {disable}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Country</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter country"
                    disabled = {disable}
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Email ID</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter email id"
                    disabled = {disable}
                  />
                </div>
              </div>
              <div className="mt-5 text-center">
                <button
                  className="btn btn-outline-primary profile-button"
                  type="button"
                  onClick={handleUpdate}
                >
                  Update Profile
                </button>
                <button
                  className="btn btn-outline-primary profile-button"
                  type="submit"
                  onClick= {handleSave}
                  disabled={disable}
                >
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
