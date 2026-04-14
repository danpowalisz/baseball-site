import { Link } from 'react-router-dom';
import articles from '../data/minorsArticles';

const Minors = () => (
  <>
    <section className="hero-section hero-page">
      <div className="hero-content">
        <h1>Minor League Baseball</h1>
        <p>The farm system and future stars</p>
      </div>
    </section>

    <section id="content" className="content-section">
      <div className="container">
        <div className="content-wrapper">
          <h2>Farm System News</h2>
          <div className="topic-page-grid">
            {articles.map((article, index) => (
              <article key={index} className="topic-page-card">
                <img src="../images/minor_league.png" alt={article.title} />
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
  </>
);

export default Minors;
