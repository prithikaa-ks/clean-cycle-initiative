import Navbar from '../components/Navbar';

function About() {
  return (
    <div>
      <Navbar />
        <div className='page-container'>
        <h1>About Us</h1> 
        <p>
          Clean Cycle Initiative is focused on providing nescessary information about women's reproductive health. 
        </p>
        <h1>Our Mission</h1>
        <p>
          We strive to empower young women and girls in international countries through menstrual education and support.
        </p>
        <h2>What We Do</h2>
        <p>
          By working with shelters in India and Nepal, we address menstrual health where access is limited and stigma exists.
        </p>
        </div>
    </div>
  );
}

export default About;