import { Link } from 'react-router-dom';
import inductees from '../data/hofInductees';

function HallOfFame() {
  return (
    <section className="hero-section hero-page">
      <div className="hero-content">
        <h1>Hall of Fame Legends</h1>
        <p>Celebrating the greatest players of all time</p>
      </div>
    </section>

    <section id="content" className="content-section">
      <div className="container">
        <div className="content-wrapper">
          <h2>Hall of Fame Inductees</h2>
          <div className="topic-page-grid">
            {inductees.map((inductee, index) => (
              <article key={index} className="topic-page-card">
                <img src="images/hall_of_fame.png" alt={inductee.name} />
                <div className="topic-content">
                  <h3>{inductee.name}</h3>
                  <p>{inductee.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>

    <footer className="footer">
      <p>&copy; 2026 Baseball Info. All rights reserved.</p>
    </footer>
  );
}

export default HallOfFame;
