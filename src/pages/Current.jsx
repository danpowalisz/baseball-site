import { Link } from 'react-router-dom';
import articles from '../data/currentArticles';

const Current = () => (
  <>
    <section className="hero-section hero-page">
      <div className="hero-content">
        <h1>Current Events</h1>
        <p>Latest news and updates from the baseball world</p>
      </div>
    </section>

    <section id="content" className="content-section">
      <div className="container">
        <div className="content-wrapper">
          <h2>The Latest in Baseball</h2>
          <div className="topic-page-grid">
            {articles.map((article, index) => (
              <article key={index} className="topic-page-card">
                <img src="/images/current_news.png" alt={article.title} />
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

export default Current;
