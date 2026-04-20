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
        <h2>
          Our Mission
        </h2>
        <p style={{ color: '#1e293b', fontSize: '1rem', maxWidth: '600px', lineHeight: '1.8', marginBottom: '100px'}}>
        At our organization, we are committed to making menstrual health education accessible,
         inclusive, and easy to understand for underprivileged communities around the world. 
         We believe that every individual deserves access to accurate information, supportive 
         resources, and the confidence to take control of their health without stigma or barriers.

        </p>


        <div style= {{display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: "20px", width: "100%"}}>
          <div className="single-column">
            <h3> Develop a Functional Educational Website            </h3>
            <p style={{color: '#1e293b', fontSize: '1rem', maxWidth: '600px', lineHeight: '1.8', marginBottom: '100px', paddingTop: '30px'}}>
              Our top priority is completing a fully functioning website that serves as a central hub 
              for menstrual health education. This platform will provide clear, approachable, and 
              interactive resources designed to be understood by a wide range of age groups and backgrounds.
            </p>
          </div>
          <div className="single-column">
            <h3> Strengthen International Partnerships            </h3>
            <p style={{color: '#1e293b', fontSize: '1rem', maxWidth: '600px', lineHeight: '1.8', marginBottom: '100px', paddingTop: '30px'}}>
            We have already established communication with multiple orphanages 
            in India and Nepal. Our goal is to continue expanding these 
            relationships and work toward implementing structured menstrual
            health education programs for girls in these communities.
            </p>
          </div>
          <div className="single-column">
            <h3>Build Local Community Connections            </h3>
            <p style={{color: '#1e293b', fontSize: '1rem', maxWidth: '600px', lineHeight: '1.8', marginBottom: '100px', paddingTop: '30px'}}>
              We plan to begin outreach to local shelters and elementary schools 
              in the upcoming semester. This will allow us to gain hands-on 
              experience delivering menstrual health presentations in an engaging,
              kid-friendly, and culturally sensitive way, supported by our 
              interactive website materials.
            </p>
          </div>
          <div className="single-column">
            <h3>Expand Membership and Fundraising Efforts            </h3>
            <p style={{color: '#1e293b', fontSize: '1rem', maxWidth: '600px', lineHeight: '1.8', marginBottom: '100px', paddingTop: '30px'}}>
            We aim to grow our organization by increasing active membership 
            and continuing fundraising initiatives. These efforts will directly 
            support our educational programs and resource development.
            </p>
          </div>
       </div>


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