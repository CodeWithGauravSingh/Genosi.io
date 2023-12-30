// src/components/profile/ProfileDashboardButtons.tsx

import React from 'react';

const ProfileDashboardButtons: React.FC = () => {
  return (
    <div className="button-group">
      <button className="create-new-graph-button">Create New Graph</button>
      <button className="share-graph-button">Share Graph</button>
      <button className="upload-papers-button">Upload Papers</button>
    </div>
  );
};

export default ProfileDashboardButtons;
