

import React from 'react';
import ProfileDetails from './ProfileDetails';
import AccountDetails from './AccountDetails';
import UsageMetrics from './UsageMetrics';
import RecentActivityFeed from './RecentActivityFeed';
import ProfileDashboardButtons from './ProfileDashboardbuttons';
import SavedGraphList from './SavedGraphList';

import './ProfileDashboard.css'; 

const ProfileDashboard: React.FC = () => {
  return (
    <div className="container mx-auto">
      <div className="profile-section">
        {/* <h2>User Profile Details</h2> */}
        <ProfileDetails />
      </div>

      <div className="profile-section">
        {/* <h2>Account Details</h2> */}
        <AccountDetails />
      </div>

      <div className="profile-section">
        {/* <h2>Usage Metrics</h2> */}
        <UsageMetrics />
      </div>

      <div className="profile-section">
        {/* <h2>Recent Activity Feed</h2> */}
        <RecentActivityFeed />
      </div>
      {/* <div className="profile-section">
       
        <ProfileDashboardButtons />
      </div> */}
      <div className="profile-section">
        {/* <h2>Recent Activity Feed</h2> */}
        <SavedGraphList />
      </div>
      {/* <div className="profile-section">
        <h2>Recent Activity Feed</h2>
        <ProfileDashboardLinks />
      </div>
       */}
    </div>
  );
};

export default ProfileDashboard;
