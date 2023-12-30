

import React from 'react';

const SavedGraphList: React.FC = () => {

  const savedGraphs = [
    { title: 'Graph 1', dateCreated: '2023-01-01', thumbnail: '/path/to/graph1-thumbnail.jpg' },
    { title: 'Graph 2', dateCreated: '2023-02-15', thumbnail: '/path/to/graph2-thumbnail.jpg' },
   
  ];

  return (
    <div className="graph-list">
      {savedGraphs.map((graph, index) => (
        <div key={index} className="graph-card">
          <img src={graph.thumbnail} alt={graph.title} />
          <p style={{color:'wheat'}}>Title: {graph.title}</p>
          <p style={{color:'wheat'}}>Date Created: {graph.dateCreated}</p>
        </div>
      ))}
    </div>
  );
};

export default SavedGraphList;
