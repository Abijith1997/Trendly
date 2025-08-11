import React from "react";

interface StarRatingProps {
  rating: number; // e.g., 3.7
  totalStars?: number; // default 5
  size?: number; // px size of each star, default 20
  filledColor?: string; // color of filled stars
  emptyColor?: string; // color of empty stars
  count: number;
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  count,
  totalStars = 5,
  size = 20,
  filledColor = "#F59E0B", // amber-500
  emptyColor = "#D1D5DB", // gray-300
}) => {
  const stars = [];

  for (let i = 0; i < totalStars; i++) {
    // Calculate fill percentage for this star
    const fillPercent = Math.min(Math.max(rating - i, 0), 1);

    stars.push(
      <svg
        key={i}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="none"
        className="inline-block"
      >
        <defs>
          <linearGradient id={`grad-${i}`}>
            <stop offset={`${fillPercent * 100}%`} stopColor={filledColor} />
            <stop offset={`${fillPercent * 100}%`} stopColor={emptyColor} />
          </linearGradient>
        </defs>
        <path
          fill={`url(#grad-${i})`}
          d="M12 17.27L18.18 21l-1.64-7.03
             L22 9.24l-7.19-.61L12 2 9.19 8.63
             2 9.24l5.46 4.73L5.82 21z"
        />
      </svg>
    );
  }

  return (
    <div className="text-sm flex items-center gap-1">
      {stars}({count})
    </div>
  );
};
