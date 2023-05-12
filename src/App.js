import StarRating from './components/StarRating';
import Dialog from './components/Dialog';
import { useState } from 'react';

import './style/index.css';

function App() {
  const [dialogVisible, setDialogVisible] = useState(false);

  function handleClose() {
    setDialogVisible(false);
  }


  return (
    <div>
      <h1> Give us your feedback </h1>
      <StarRating />
      <button className='open-btn' onClick={() => setDialogVisible(true)}>
          More info
      </button> 
      { dialogVisible && <Dialog onClose={handleClose} />}
    </div>
  );
}

export default App;
