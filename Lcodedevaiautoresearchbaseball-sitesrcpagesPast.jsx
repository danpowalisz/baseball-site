import { Link } from 'react-router-dom';
import articles from '../data/pastArticles';

function Past() {
  return (
    <section className="hero-section hero-page">
      <div className="hero-content">
        <h1>Historical Moments</h1>
        <p>Historical moments and legendary careers</p>
      </div>
    </section>

    <section id="content" className="content-section">
      <div className="container">
        <div className="content-wrapper">
          <h2>Baseball History</h2>
          <div className="topic-page-grid">
            {articles.map((article, index) => (
              <article key={index} className="topic-page-card">
                <img src={article.image} alt={article.title} />
                <div className="topic-content">
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
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

export default Past;
