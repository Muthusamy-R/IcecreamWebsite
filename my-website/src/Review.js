import React, { useState } from 'react';
import './Reviewstyle.css';

function Review() {
  const [reviews, setReviews] = useState([
    { name: 'John', rating: 4, review: 'Great product!', date: '2023-06-19' },
    { name: 'Jane', rating: 5, review: 'Highly recommended!', date: '2023-06-18' },
  ]);

  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newReview = {
      name: name,
      rating: rating,
      review: review,
      date: new Date().toISOString().split('T')[0],
    };

    setReviews([...reviews, newReview]);
    setName('');
    setRating(0);
    setReview('');
  };

  return (
    <div className="review-container">
      <h2>Ratings and Reviews</h2>

      {/* Display existing reviews */}
      {reviews.map((review, index) => (
        <div className="review-item" key={index}>
          <p className="reviewer">{review.name}</p>
          <center>
          <p className="rating">Rating: {review.rating}</p>
          <p>{review.review}</p>
          <p className="date">Date: {review.date}</p>
          </center>
        </div>
      ))}
      <h2>YOUR RATINGS AND REVIEW</h2>
      {/* Review submission form */}
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
        />
        <input
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          placeholder="Rating (1-5)"
        />
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Your review"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export { Review };
