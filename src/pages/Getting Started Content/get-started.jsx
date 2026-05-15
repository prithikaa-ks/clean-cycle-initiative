import Navbar from '../../components/Navbar';
import { useNavigate } from 'react-router-dom';


function GetStarted() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
    <div className="guidance-wrapper">
      <main className="guidance-page">
        <section className="guidance-hero" onClick={() => navigate('/simple-guidance')}>
          <h1>Simple Guidance for Monthly Care</h1>
          <p>
            Getting through your cycle can feel overwhelming, especially when there is a lot
            of information out there. This page gives simple, clear guidance to help you
            understand common menstrual products and basic hygiene habits.
          </p>
        </section>


        <section className="guidance-hero" onClick={() => navigate('/normal')}>
          <h1>What's Expected?</h1>
          <p>
            Every person is different and symptoms can vary between you and your friends.
            However, some symptoms may indicate that something is wrong and may 
            need additional treatment. 
          </p>
        </section>



        
      </main>
      </div>
    </>
  );
}

export default GetStarted;