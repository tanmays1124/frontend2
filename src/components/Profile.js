import { useEffect, useState } from "react";
import "./Profile.css";
import Navbar from "./Navbar";
import pfimg from "../images/profile.jpg";
import axios from "axios";
import Layout from "./Layout";

const Profile = () => {
  const [disable, setDisable] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [photoSrc, setPhotoSrc] = useState("");
  const [photo, setPhoto] = useState(null);
  const [isImageChanged, setIsImageChanged] = useState(false);

  const userId = localStorage.getItem("userId");

  const handleUpdate = () => {
    setDisable(false);
  };

  const handlePhotoChange = (e) => {
    const selectedFile = e.target.files[0];

    // Add validation to ensure it's an image file
    if (selectedFile && selectedFile.type.startsWith('image/')) {
      setPhoto(selectedFile);
      previewProfilePicture(selectedFile);
      setIsImageChanged(true);
    } else {
      // Handle invalid file type
      console.error("Invalid file type. Please select an image.");
    }
  };

  const previewProfilePicture = (file) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      setPhotoSrc(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSave = async (event) => {
    event.preventDefault();
  
    const formData = {
      first_name: document.querySelector('[name="first_name"]').value,
      last_name: document.querySelector('[name="last_name"]').value,
      email: document.querySelector('[name="email"]').value,
    };
  
    console.log("Form Data:", formData); // Log the form data
  
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/update/${userId}`,
        formData
      );
  
      console.log(response.data);
      setDisable(true);
  
      // Update user data after saving
      await fetchUserData();
  
      if (photo) {
        console.log("Uploading photo:", photo);
        await handleUpload();
  
        // If the image was changed, update the photoSrc
        const reader = new FileReader();
        reader.onloadend = async () => {
          setPhotoSrc(reader.result);
          setIsImageChanged(false); // Reset isImageChanged after saving
        };
        reader.readAsDataURL(photo);
      }
  
    } catch (err) {
      console.log(err);
    }
  };
  
  
  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("photo", photo);

    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/upload/${userId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Photo uploaded successfully:", response.data);

      // Assuming the response.data contains the filename or path after upload
      const uploadedPhotoSrc = response.data;

      // Update the photoSrc state
      setPhotoSrc(uploadedPhotoSrc);
      setIsImageChanged(false); // Reset isImageChanged after saving
    } catch (error) {
      console.error("Error uploading photo:", error);
      // Handle error - display error message to the user
    }
  };

  const fetchUserData = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/userprofile/${userId}`);
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const data = await response.json();
      console.log("Fetched user data:", data);
  
      setFirstName(data.first_name);
      setLastName(data.last_name);
      setUsername(data.username);
      setEmail(data.email);
  
      // Append the relative path to the base URL to get the complete photo URL
      const completePhotoUrl = `http://127.0.0.1:8000${data.photo}`;
      
      // Update photoSrc with the complete photo URL
      setPhotoSrc(completePhotoUrl);
  
      setIsImageChanged(false);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
    <Layout>
     
      <div className="container shadow rounded bg-secondary mt-5 mb-5 profile-container">
        <div className="row">
          <div className="col-md-4 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <label className="upload">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  disabled={disable}
                  id="profilePictureInput"
                />
                
                {photoSrc ? (
                  <img className="rounded-circle mt-5" width="150px" src={photoSrc} alt="Profile" />
                ) : (
                  <img className="rounded-circle mt-5" width="150px" src={pfimg} alt="Profile" />
                )}
              </label>
              <span className="text-black-50">{username}</span>
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
                    defaultValue={firstName}
                    disabled={disable}
                    name="first_name"
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">Last Name</label>
                  <input
                    type="text"
                    className="form-control "
                    placeholder="last name"
                    defaultValue={lastName}
                    disabled={disable}
                    name="last_name"
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Email ID</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter email id"
                    defaultValue={email}
                    disabled={disable}
                    name="email"
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
          onClick={handleSave}
          disabled={disable}
        >
          Save Profile
        </button>
      </div>
            </div>
          </div>
        </div>
      </div>
      </Layout>
    </>
  );
};

export default Profile;
