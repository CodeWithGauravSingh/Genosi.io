
import React from 'react';
import './ProfileDetails.css'; 

const UserProfilePage: React.FC = () => {
  return (
    <div className="user-profile-container">
      <div className="profile-header">
        <img
          src="profilepic.jpg" 
          alt="Profile"
          className="profile-photo"
        />
        <div className="profile-name">John Doe</div>
        <div className="profile-email">john.doe@example.com</div>
      </div>

      <div className="bio-section">
        <div className="bio-heading">Bio</div>
        <div className="profile-bio">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>

      <div className="edit-profile-button">
        <button>Edit Profile</button>
      </div>
    </div>
  );
};

export default UserProfilePage;
