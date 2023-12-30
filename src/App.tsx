// src/App.tsx

// import React from 'react';
// import ProfileDashboardPage from './components/Profile/ProfileDashboard';

// const App: React.FC = () => {
//   return (
//     <div className="App">
//       <ProfileDashboardPage />
//     </div>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/Pages/LandingPage';
import Profilepage from './components/Pages/Profilepage'
import ProfileDashboard from './components/Profile/ProfileDashboard';
import AccountSettingSection from './components/Profile/AccountSettingSection';
import GraphDetailsPageSection from './components/Profile/GraphDetailsPageSection';
import CreateGraphPageSection from './components/Profile/CreateGraphPageSection';
import PricingPage from './components/Pages/PricingPage';
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/profile"
          
         element={<Profilepage />} />
        
             
      
        <Route path="/" 
         element={ <LandingPage />} />
         <Route path="/profile/dashboard"
          
          element={<ProfileDashboard />} />
         
         <Route path="/profile/account-settings"
          
          element={<AccountSettingSection />} />
        
         
         <Route path="/profile/graph-details"
          
          element={<GraphDetailsPageSection />} />
         
         <Route path="/profile/create-graph"
          
          element={<CreateGraphPageSection />} />
         
         
         <Route path="/pricing"
          
          element={<PricingPage />} />
         
      
      </Routes>
    </Router>
  );
};

export default App;
