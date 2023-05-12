function Dialog({ onClose }) {

    return (
      <div className="dialog">
            <h3> Share your experience</h3>
            <p> Rate our job by clicking on the stars. Thanks for your feedback!</p>
            <button 
            className="close-btn"
            value="More info" onClick={onClose}>Close
            </button>
      </div>
    );
  }
export default Dialog;