
import React from 'react';

const AccountSettingsSection: React.FC = () => {
  return (
    <div>
      

      <div className="account-settings-container" style={{borderRadius:'20px', maxWidth: '600px', margin: '10rem 30rem',padding:'20px', backgroundColor:'white', textAlign:'center' }}>
        <div className="profile-update" style={{ marginBottom: '1rem' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Update User Profile Details</h3>
          
          <form>
            
            <button
              style={{
                padding: '0.5rem',
                backgroundColor: '#4CAF50',
                color: 'white',
                cursor: 'pointer',
              }}
              type="submit"
            >
              Update Profile
            </button>
          </form>
        </div>

        <div className="password-change" style={{ marginBottom: '1rem' }}>
          {/* <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Change Password</h3> */}
          
          <form>
         
            <button
              style={{
                padding: '0.5rem',
                backgroundColor: '#4CAF50',
                color: 'white',
                cursor: 'pointer',
              }}
              type="submit"
            >
              Change Password
            </button>
          </form>
        </div>

        <div className="subscription-management" style={{ marginBottom: '1rem' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Manage Subscription Plan</h3>
          
          <p>Current Plan: Basic Plan</p>
          <button
            style={{
              padding: '0.5rem',
              backgroundColor: '#2196F3',
              color: 'white',
              cursor: 'pointer',
            }}
          >
            Change Plan
          </button>
        </div>

        <div className="third-party-link" style={{ marginBottom: '1rem' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Link Third-Party Accounts</h3>
          
          <button
            style={{
              padding: '0.5rem',
              backgroundColor: '#FFC107',
              color: 'white',
              cursor: 'pointer',
            }}
          >
            Link Google Account
          </button>
        </div>

        <div className="usage-statistics" style={{ marginBottom: '1rem' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Usage Statistics</h3>
          
          <p>Total Usage: 30 days</p>
          <p>Remaining Usage: 15 days</p>
        </div>
      </div>
    </div>
  );
};

export default AccountSettingsSection;
