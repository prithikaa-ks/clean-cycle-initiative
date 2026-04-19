import Navbar from '../components/Navbar';

function About() {
  return (
    <>
      <Navbar/>
      {/* Title Section*/ }
      <div style={{
        backgroundColor: '#ee6a92',
        minHeight: '50vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '40px',
      }}>
        <h1 style={{ fontFamily: 'Trebuchet MS', fontWeight: 200, color: '#f7eedaff', fontSize: '3rem' }}>
          Our Team
        </h1>
        <p style={{ color: '#f7eedaff', fontSize: '1.2rem', maxWidth: '500px' }}>
        </p>

     
      </div>

      {/* About/Mission Section */}
      <div style={{
        backgroundColor: '#f7eedaff',
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '60px 40px',
      }}>
        <h2 style={{ fontFamily: 'Trebuchet MS', fontWeight: 200, color: '#ee6a92', fontSize: '2rem' }}>
          Add team photos here. 
        </h2>
      </div>

      {/* Footer */}
      <div style={{
        backgroundColor: '#e0858e',
        padding: '40px',
        textAlign: 'center',
      }}>
        <p style={{ color: '#f7eedaff', margin: 0 }}>
          Footer content.
        </p>
      </div>
    </>
  );
}

export default About;