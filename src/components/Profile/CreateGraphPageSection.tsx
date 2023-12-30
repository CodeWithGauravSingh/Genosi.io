
import React from 'react';

const CreateGraphPageSection: React.FC = () => {
  return (
    <div>
      

      <div className="graph-form-container" style={{ maxWidth: '400px', margin: '10rem 30rem', display:'flex', justifyContent:'center', alignItems:'center',border:'2px solid black',backgroundColor:'white',borderRadius:'10px' }}>
        <form className="graph-form" style={{ display: 'flex', flexDirection: 'column', margin:'10px 10px'}}>
          <div className="form-group" style={{ marginBottom: '1rem' }}>
            <label htmlFor="graphTitle">Graph Title:</label>
            <input type="text" id="graphTitle" name="graphTitle" style={{ width: '100%', padding: '0.5rem', border:'1px solid black' }} />
          </div>

          <div className="form-group" style={{ marginBottom: '1rem' }}>
            <label htmlFor="graphDescription">Graph Description:</label>
            <textarea id="graphDescription" name="graphDescription" style={{ width: '100%', padding: '0.5rem',border:'1px solid black' }}></textarea>
          </div>

          <div className="form-group" style={{ marginBottom: '1rem', border: '2px solid black', boxShadow: '3px 3px', borderRadius:'5px', padding:'3px 3px', cursor:'pointer' }}>
            <label>Upload Papers or Select from Favorites/Collections:</label>
            
          </div>

          <div className="form-group" style={{ marginBottom: '1rem', border: '2px solid black', boxShadow: '3px 3px', borderRadius:'5px', padding:'3px 3px', cursor:'pointer'}}>
            <label style={{cursor:'pointer'}}>Configure Graph Settings:</label>
            
          </div>

          <div className="form-group">
            <button type="submit" style={{padding: '0.5rem', backgroundColor: '#4CAF50', color: 'white', cursor: 'pointer',margin:'7px 50px' }}>
              View Graph Visualization Preview
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateGraphPageSection;
