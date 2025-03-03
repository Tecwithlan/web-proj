import React from 'react';
import './Profile.css';
import profilePic from '../assets/profile.jpg'; // Make sure to add a profile picture in the assets folder
import { FaInstagram, FaFacebook, FaTwitter, FaTiktok, FaYoutube } from 'react-icons/fa';

function Profile() {
  return (
    <div className="profile-section">
      <img src={profilePic} alt="Profile" className="profile-pic" />
      <div className="contact-info">
        <h2>ALLAN MASIBO</h2>
        <p>Email: masiboallan339@gmail.com</p>
        <p>Phone: (254) 7919-57368</p>
        <div className="social-icons">
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        </div>
      </div>
    </div>
  );
}

export default Profile;