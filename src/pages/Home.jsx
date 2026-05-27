import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const goal = 1000;
  const raised = 245; // TODO: update periodically (can we automate this?)
  const percent = (raised/goal) * 100

  return (
    <>
      <Navbar />
      <div className="heading-container" style={{ minHeight: '100vh' }}>
        <h1>Clean Cycle Initiative</h1>
        <p style={{ color: '#f7eedaff', fontSize: '1.2rem', maxWidth: '500px', margin: '0 auto 32px' }}>
          Breaking stigma. One cycle at a time.
        </p>
        <button className="action-btn" onClick={() => navigate('/get-started')}>
          Start Here
        </button>
      </div>



      {/* Page Content */}
      <div className="guidance-wrapper">
        <main className="guidance-page">
          <section className="guidance-section">
            <h2>Our Mission</h2>
            <p>
              At our organization, we are committed to making menstrual health education accessible,
              inclusive, and easy to understand for underprivileged communities around the world.
              We believe that every individual deserves access to accurate information, supportive
              resources, and the confidence to take control of their health without stigma or barriers.
            </p>
            <button
              className="action-btn"
              style={{ marginTop: '24px' }}
              onClick={() => navigate('/about')}
            >
              Learn More About Us
            </button>
          </section>

          {/* Fundraising Tracker */}
          <section className="guidance-section">
            <h2>Fundraising Goal</h2>
            <p style={{ marginBottom: '20px' }}>
              Help us reach our goal to bring menstrual health education to communities in need.
            </p>
            <div className="tracker-bar-bg">
              <div className="tracker-bar-fill" style={{ width: `${percent}%` }} />
            </div>
            <p className="tracker-label">${raised} raised of ${goal} goal</p>
            <button
              className="action-btn"
              style={{ marginTop: '24px' }}
              onClick={() => navigate()} //TODO: set up donation
            >
              Donate
            </button>
          </section>

        </main>
      </div>
    </>
  );
}

export default Home;