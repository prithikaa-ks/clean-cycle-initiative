import Navbar from '../components/Navbar';
import namrata from './assets/namrata.jpeg';
import manaswi from './assets/manaswi.JPEG';
import hannah from './assets/hannah.JPEG';
import shreya from './assets/shreya.JPEG';
import adya from './assets/adya.JPEG';
import jennet from './assets/jennet.JPG';
import prithikaa from './assets/prithikaa.jpeg';
import nandini from './assets/nandini.jpeg';

const cardColors = ['#F2D88F', '#E36888', '#6698CC', '#B4B534', '#F08C21'];

const shortTermGoals = [
  {
    title: 'Develop a Functional Educational Website',
    body: 'Our top priority is completing a fully functioning website that serves as a central hub for menstrual health education. This platform will provide clear, approachable, and interactive resources designed to be understood by a wide range of age groups and backgrounds.',
  },
  {
    title: 'Strengthen International Partnerships',
    body: 'We have already established communication with multiple orphanages in India and Nepal. Our goal is to continue expanding these relationships and work toward implementing structured menstrual health education programs for girls in these communities.',
  },
  {
    title: 'Build Local Community Connections',
    body: 'We plan to begin outreach to local shelters and elementary schools in the upcoming semester, delivering menstrual health presentations in an engaging, kid-friendly, and culturally sensitive way.',
  },
  {
    title: 'Expand Membership and Fundraising Efforts',
    body: 'We aim to grow our organization by increasing active membership and continuing fundraising initiatives that directly support our educational programs and resource development.',
  },
];

const longTermGoals = [
  {
    title: 'Support Research and Resource Development',
    body: 'We aim to raise funds that support menstrual health research and help provide essential resources, including computers and digital access, for under-resourced shelters internationally.',
  },
  {
    title: 'Provide 1-on-1 Educational Support',
    body: 'We hope to develop personalized menstrual health mentorship for orphans, ensuring they receive tailored guidance in a supportive setting despite language barriers and time differences.',
  },
  {
    title: 'Create Interactive Educational Media',
    body: 'We plan to design short videos, animations, and interactive quizzes that simplify menstrual health education and make learning more engaging for younger audiences.',
  },
];


const teamPhotos = [
  { title: 'Namrata Boggaram', body: 'President', img: namrata },
  { title: 'Manaswi Panthi', body: 'President', img: manaswi },
  { title: 'Hannah Gilchrist', body: 'Vice President', img: hannah },
  { title: 'Shreya Patel', body: 'Outreach', img: shreya },
  { title: 'Adya Chawda', body: 'Treasurer', img: adya },
  { title: 'Jennet Mamiyeva', body: 'Secretary', img: jennet },
  { title: 'Prithikaa Sadagopan', body: 'Website Manager', img: prithikaa },
  { title: 'Nandini Guduru', body: 'Website Manager', img: nandini },
];


function About() {
  return (
    <>
      <Navbar />

      <div className="guidance-wrapper">
        <main className="guidance-page">

          <section className="guidance-hero">
            <h1>About Us</h1>
            <p>
              We are committed to making menstrual health education accessible, inclusive, and
              easy to understand for underprivileged communities around the world.
            </p>
          </section>

          {/* Short Term Goals */}
          <section className="guidance-section">
            <h2>Short Term Goals</h2>
            <p style={{ marginBottom: '24px' }}>
              In the near future, our focus is on building a strong foundation that allows us
              to deliver meaningful and accessible education both locally and internationally.
            </p>
            <div className="product-list" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
              {shortTermGoals.map((goal, i) => (
                <div
                  key={i}
                  className="product-card"
                  style={{ backgroundColor: cardColors[i % cardColors.length] }}
                >
                  <h3 style={{ color: i === 0 ? '#1f1b24' : '#fffaf2' }}>{goal.title}</h3>
                  <p style={{ color: i === 0 ? '#1f1b24' : '#fffaf2' }}>{goal.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Long Term Goals */}
          <section className="guidance-section">
            <h2>Long Term Goals</h2>
            <p style={{ marginBottom: '24px' }}>
              Looking ahead, we hope to expand our impact through sustainable education
              initiatives, global outreach, and innovative learning tools.
            </p>
            <div className="product-list">
              {longTermGoals.map((goal, i) => (
                <div
                  key={i}
                  className="product-card"
                  style={{ backgroundColor: cardColors[(i + 2) % cardColors.length] }}
                >
                  <h3 style={{ color: '#fffaf2' }}>{goal.title}</h3>
                  <p style={{ color: '#fffaf2' }}>{goal.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Our Team */}
          <section className="guidance-section">
            <h2>Our Team</h2>
            <p>Meet the people behind the Clean Cycle Initiative.</p>

            <div className='team-list'>
            {teamPhotos.map((member, i) => (
                <div
                  key={i}
                  className="team-card"
                  style={{ backgroundColor: cardColors[(i + 2) % cardColors.length] }}
                >
                  <h3 style={{ color: '#fffaf2' }}>{member.title}</h3>
                  <p style={{ color: '#fffaf2' }}>{member.body}</p>
                  <img
                        src={member.img}
                        style={{
                          width: '200px',
                          height: '200px',
                          objectFit: 'cover',
                          objectPosition: 'center',
                          borderRadius: '12px',
                          marginTop: '20px'
                        }}
                      />
                </div>
              ))}

            </div>
          </section>

        </main>
      </div>

    </>
  );
}

export default About;