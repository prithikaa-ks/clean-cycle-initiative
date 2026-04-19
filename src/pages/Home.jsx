// import Navbar from '../components/Navbar';

import Navbar from "../components/Navbar";


const buttonStyle = {
  backgroundColor: '#f7eedaff',
  color: 'black',
  padding: '15px 15px',
  borderRadius: '20px',
  outline: 0,
  border: 0,
  textTransform: 'uppercase',
  margin: '20px 20px',
  cursor: 'pointer',
  boxShadow: '0px 2px 2px lightgray',
  transition: 'ease background-color 250ms',
};


function Home() {
  return (
    <>
      <Navbar/>
      {/* Title Section*/ }
      <div style={{
        backgroundColor: '#ee6a92',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '40px',
      }}>
        <h1 style={{ fontFamily: 'Trebuchet MS', fontWeight: 200, color: '#f7eedaff', fontSize: '3rem' }}>
          Clean Cycle Initiative
        </h1>
        <p style={{ color: '#f7eedaff', fontSize: '1.2rem', maxWidth: '500px' }}>
          Breaking stigma. One cycle at a time.
        </p>

        <button
          style={buttonStyle}> 
          Start Here
        </button>
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
          Our Mission
        </h2>
        <p style={{ color: '#1e293b', fontSize: '1rem', maxWidth: '600px', lineHeight: '1.8' }}>
        At our organization, we are committed to making menstrual health education accessible,
         inclusive, and easy to understand for underprivileged communities around the world. 
         We believe that every individual deserves access to accurate information, supportive 
         resources, and the confidence to take control of their health without stigma or barriers.

        </p>
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

export default Home;