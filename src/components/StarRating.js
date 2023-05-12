import Star from "./Star";
import { useState } from "react";

  function StarRating() {

    const [selectedStars, setSelectedStars] = useState(0);

    function showRatingMessage(rating) {
        if (rating === 1) return 'Terrible';
        if (rating === 2) return 'Bad';
        if (rating === 3) return 'Regular';
        if (rating === 4) return 'Good';
        if (rating === 5) return 'Excellent!';
      };

    return (
        <div className="container">
            <div className="star-rating">
                {[...Array(5)].map((_, i) => (
                <Star
                    className="star-icon"
                    key={i}
                    selected={selectedStars > i}
                    onSelect={() => setSelectedStars(i + 1) }
                />
                ))}
            </div>
            <h2 className="message">{showRatingMessage(selectedStars)}</h2>
        </div>
    );
  }

export default StarRating;