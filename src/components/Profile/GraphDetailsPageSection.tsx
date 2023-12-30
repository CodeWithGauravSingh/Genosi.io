
import React from 'react';

const GraphDetailsPageSection: React.FC = () => {
  return (
    <div>
    

      <div className="graph-details-container" style={{borderRadius:'40px', maxWidth: '600px', margin: '10rem 30rem',backgroundColor:'white', justifyContent:'center', alignContent:'center', textAlign:'center',padding:'10px' }}>
        <div className="graph-info" style={{ marginBottom: '1rem' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Graph Title</h3>
          <p style={{ color: '#555', marginBottom: '0.5rem' }}>Description: Graph Description goes here.</p>
          <p style={{ color: '#777', marginBottom: '0.5rem' }}>Date Created: January 1, 2023</p>
        </div>

        <div className="graph-actions" style={{ marginBottom: '1rem' }}>
          <button
            style={{
              padding: '0.5rem',
              backgroundColor: '#4CAF50',
              color: 'white',
              marginRight: '0.5rem',
              cursor: 'pointer',
            }}
          >
            View Graph
          </button>
          <button
            style={{
              padding: '0.5rem',
              backgroundColor: '#2196F3',
              color: 'white',
              marginRight: '0.5rem',
              cursor: 'pointer',
            }}
          >
            Edit Graph
          </button>
          <button
            style={{
              padding: '0.5rem',
              backgroundColor: '#f44336',
              color: 'white',
              cursor: 'pointer',
            }}
          >
            Delete Graph
          </button>
        </div>

        <div className="papers-list" style={{ marginBottom: '1rem' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Papers in the Graph</h3>
          <ul>
            <li>Paper 1</li>
            <li>Paper 2</li>
            {/* Add more papers as needed */}
          </ul>
        </div>

        <div className="graph-actions" style={{ marginTop: '1rem' }}>
          <button
            style={{
              padding: '0.5rem',
              backgroundColor: '#FFC107',
              color: 'white',
              marginRight: '0.5rem',
              cursor: 'pointer',
            }}
          >
            Edit Papers
          </button>
          <button
            style={{
              padding: '0.5rem',
              backgroundColor: '#9E9E9E',
              color: 'white',
              marginRight: '0.5rem',
              cursor: 'pointer',
            }}
          >
            Share Graph
          </button>
          <button
            style={{
              padding: '0.5rem',
              backgroundColor: '#f44336',
              color: 'white',
              cursor: 'pointer',
            }}
          >
            Delete Graph
          </button>
        </div>
      </div>
    </div>
  );
};

export default GraphDetailsPageSection;
