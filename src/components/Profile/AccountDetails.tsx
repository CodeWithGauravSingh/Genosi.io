import React from 'react';

const AccountDetails: React.FC = () => {
  return (
    <div className="account-details">
      <h2 style={{color:'yellowgreen'}}>Account Details</h2>
      <p style={{color:'white'}}>Subscription Plan: Basic Plan</p>
      <p style={{color:'white'}}>Status:Active</p>
    </div>
  );
};

export default AccountDetails;
