import React from 'react';

const ReviewCard = ({ review }) => {
  return (
    <div className={`review-card ${review.category}`}>
      <div className="review-profile">
        <img src={review.profile_photo} alt={`Photo of ${review.author_name}`} />
      </div>
      <div className="review-content">
        <div className="review-header">
          <span className="author-name">{review.author_name}</span>
          <span className="review-date">{new Date(review.date).toLocaleDateString()}</span>
        </div>
        <div className="review-stars">{'⭐'.repeat(review.rating)}</div>
        <p className="review-text">{review.review_text}</p>
      </div>
      <style jsx>{`
        .review-card {
          background: #fff;
          border-radius: 10px;
          width: 320px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          display: flex;
          padding: 15px;
          gap: 15px;
          align-items: flex-start;
          margin-bottom: 20px;
          border-left: 5px solid transparent;
        }
        .review-profile img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
        }
        .review-content {
          flex-grow: 1;
        }
        .review-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .author-name {
          font-weight: bold;
          font-size: 1.1em;
          color: #333;
        }
        .review-date {
          font-size: 0.9em;
          color: #777;
        }
        .review-stars {
          color: #fbbc04;
          margin: 8px 0;
        }
        .review-text {
          font-size: 1em;
          color: #555;
        }
        .review-card.Positive { border-left-color: #4caf50; }
        .review-card.Neutral { border-left-color: #ff9800; }
        .review-card.Negative { border-left-color: #f44336; }
      `}</style>
    </div>
  );
};

export default ReviewCard;
