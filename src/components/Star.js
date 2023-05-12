import { FaStar } from 'react-icons/fa';

function Star({ selected, onSelect }) {
    return (
      <FaStar 
        color={selected ? "gold" : "gray"} 
        onClick={onSelect}
        onMouseEnter={() => onSelect(true)}
        onMouseLeave={() => onSelect(false)}
      />
    );
  }

export default Star;