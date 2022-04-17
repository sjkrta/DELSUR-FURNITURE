import React from "react";
import { Star, StarHalf, StarOutline } from "@material-ui/icons";

function generate_rating(full, half, empty) {
  let rating = [];
  for (let i = 0; i < full; i++) {
    rating.push(<Star key={`star${i}`} />);
  }
  for (let i = 0; i < half; i++) {
    rating.push(<StarHalf key={`starhalf${i}`} />);
  }
  for (let i = 0; i < empty; i++) {
    rating.push(<StarOutline key={`staroutline${i}`} />);
  }
  return rating;
}

export const ratingStarGen = (n) =>{
  let number = Math.floor(n * 2);
  if (number % 2 === 0) {
    number = number / 2;
    return generate_rating(number, 0, 5 - number);
  } else {
    number = number - 1;
    number = number / 2;
    return generate_rating(number, 1, 4 - number);
  }
}
