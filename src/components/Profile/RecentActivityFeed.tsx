

import React from 'react';

const RecentActivityFeed: React.FC = () => {
  return (
    <div className="recent-activity-feed">
      <h2 style={{color:'yellowgreen'}}>Recent Activity Feed</h2>
      <p style={{color:'white'}}>Recent Graphs: Graph 1, Graph 2, Graph 3</p>
      <p style={{color:'white'}}>Recent Collections: Collection A, Collection B</p>
      <p style={{color:'white'}}>Recent Queries: Query 1, Query 2</p>
    </div>
  );
};

export default RecentActivityFeed;
