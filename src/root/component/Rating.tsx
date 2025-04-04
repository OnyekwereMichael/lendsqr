import { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

const Rating = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (value: number) => {
    setRating(value);
  };

  return (
    <div style={{ display: "flex", gap: "0.5rem", cursor: "pointer" }}>
      {[1, 2, 3].map((star) => (
        <span key={star} onClick={() => handleRating(star)}>
          {rating >= star ? (
            <FaStar color="gold" size={20} />
          ) : (
            <FaRegStar color="gold" size={20} />
          )}
        </span>
      ))}
    </div>
  );
};

export default Rating;
