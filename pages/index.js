import { useState } from 'react';
import ReviewCard from '../components/ReviewCard';
import reviewsData from '../data/reviews.json';

export default function Home() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Positive', 'Neutral', 'Negative'];

  // Filter logic for reviews
  const filteredReviews =
    filter === 'All'
      ? reviewsData
      : reviewsData.filter((review) => review.category === filter);

  return (
    <div className="container">
      <header>
        <h1>Customer Reviews</h1>
        <p>See what our customers say about us!</p>
      </header>

      <section className="filters">
        {categories.map((category) => (
          <button
            key={category}
            className={filter === category ? 'active' : ''}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </section>

      <section className="reviews-container">
        {filteredReviews.length > 0 ? (
          filteredReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))
        ) : (
          <p>No reviews found.</p>
        )}
      </section>

      <style jsx>{`
        .container {
          max-width: 960px;
          margin: 40px auto;
          padding: 0 20px;
        }
        header {
          text-align: center;
          margin-bottom: 30px;
        }
        h1 {
          color: #222;
        }
        .filters {
          text-align: center;
          margin-bottom: 20px;
        }
        .filters button {
          padding: 10px 20px;
          margin: 0 8px;
          border: none;
          border-radius: 20px;
          cursor: pointer;
          background-color: #eee;
          font-weight: bold;
          transition: background-color 0.3s;
        }
        .filters button.active,
        .filters button:hover {
          background-color: #1976d2;
          color: #fff;
        }
        .reviews-container {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: center;
        }
        p {
          text-align: center;
          font-size: 1.1em;
          color: #555;
        }
        @media (max-width: 600px) {
          .reviews-container {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
}
