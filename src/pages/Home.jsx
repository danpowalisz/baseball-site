import { Link } from 'react-router-dom';

const Home = () => (
  <>
    <section className="hero-section">
      <div className="hero-content">
        <h1>Welcome to Baseball Info</h1>
        <p>Your source for everything baseball</p>
      </div>
    </section>

    <section id="topics" className="topics-section">
      <div className="container">
        <h2>Topics</h2>
        <div className="topics-grid">
          <div className="topic-card">
            <img src="/images/current_news.png" alt="Current Events" />
            <h3><Link to="/current" style={{ color: 'inherit', textDecoration: 'none' }}>Current</Link></h3>
            <p>Latest news and updates from the baseball world</p>
          </div>

          <div className="topic-card">
            <img src="/images/past.png" alt="History" />
            <h3><Link to="/past" style={{ color: 'inherit', textDecoration: 'none' }}>Past</Link></h3>
            <p>Historical moments and legendary careers</p>
          </div>

          <div className="topic-card">
            <img src="/images/hall_of_fame.png" alt="Hall of Fame" />
            <h3><Link to="/hof" style={{ color: 'inherit', textDecoration: 'none' }}>Hall of Fame</Link></h3>
            <p>Celebrating the greatest players of all time</p>
          </div>

          <div className="topic-card">
            <img src="/images/minor_league.png" alt="Minor Leagues" />
            <h3><Link to="/minors" style={{ color: 'inherit', textDecoration: 'none' }}>Minor League</Link></h3>
            <p>The farm system and future stars</p>
          </div>
        </div>
      </div>
    </section>

    <section id="about" className="about-section">
      <div className="container">
        <h2>About Us</h2>
        <div className="about-content">
          <img src="/images/profile.png" alt="Profile Photo" />
          <p>Welcome to Baseball Info, your premier destination for all things baseball! We're passionate about the sport and dedicated to bringing you comprehensive coverage of current events, historical insights, and legendary achievements. Whether you're a lifelong fan or just getting into the game, we have something for everyone.</p>
        </div>
      </div>
    </section>
  </>
);

export default Home;
