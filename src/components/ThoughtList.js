import React from 'react';
import '../style.css';

import ThoughtCard from './ThoughtCard';
import thoughts from '../assets/data/thoughts';

function createThought(thought) {
  return (
    <ThoughtCard
      key={thought.id}
      title={thought.title}
      date={thought.date}
      image={thought.image}
      description={thought.description}
      link={thought.link}
    />
  );
}

function ThoughtList() {
  return (
    <div className="portfolio-section">
      <div class="heading-container">
        <h2>My Thoughts about Code</h2>
      </div>
      <div className="grid-container">{thoughts.map(createThought)}</div>
    </div>
  );
}

export default ThoughtList;
