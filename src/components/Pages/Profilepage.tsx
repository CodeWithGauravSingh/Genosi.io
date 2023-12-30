


import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import ProfileDashboard from './../Profile/ProfileDashboard';
import AccountSettingSection from './../Profile/AccountSettingSection';
import GraphDetailsPageSection from '../Profile/GraphDetailsPageSection';
import CreateGraphPageSection from '../Profile/CreateGraphPageSection';
import './Profilepage.css'

const ProfilePage: React.FC = () => {
  return (
    

    <div className="container mx-auto mt-8">
      {/* <h2 className="text-2xl font-bold mb-4">Profile Dashboard</h2> */}
      <div className="Profilepagesections">
        <h3>GRAFF</h3>
        <Link to="/profile/dashboard" className="btn">
          Dashboard
        </Link>
        <Link to="/profile/create-graph" className="btn">
          Create New Graph
        </Link>
        <Link to="/profile/graph-details" className="btn">
          Graph Details
        </Link>
        <Link to="/profile/account-settings" className="btn">
          Account Settings
        </Link>
             </div>
             <h1>Welcome to Profile Page</h1>

      {Array.from({ length: 50 }).map((_, index) => (
        <div
          key={index}
          className="star"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `twinkle ${Math.random() * 2 + 1}s infinite alternate`,
          }}
        ></div>
      ))}

      <div>
       
        <Routes>
          <Route path="/profile/dashboard" element={<ProfileDashboard />} />

          
          <Route path="/profile/create-graph" element={<CreateGraphPageSection />} />

          
          <Route path="/profile/graph-details" element={<GraphDetailsPageSection />} />

          
          <Route path="/profile/account-settings" element={<AccountSettingSection />} />
        </Routes>
      </div>
    </div>
  );
};






export default ProfilePage;
