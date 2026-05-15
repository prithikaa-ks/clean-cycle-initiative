import { Flashcard } from "react-quizlet-flashcard";
import Navbar from '../../components/Navbar';
import "react-quizlet-flashcard/dist/index.css";
import { useState } from 'react';



const initialCards = [
    {front: 'Leakage can happen sometimes', back:'Normal', normal:true}, 
    {front: 'Skin irritation can occur, especially in warmer weather', back:'Normal', normal:true},
    {front: 'Periods last a few days each month', back:'Normal', normal:true},
    {front: 'Mild discomfort or cramping can occur', back:'Normal', normal:true},
    {front: 'Flow may vary from light to heavy', back:'Normal', normal:true},
    {front: 'In the first few years of having a menstrual cycle, it is normal for your period to be irregular or varying in length', back:'Normal', normal:'true'},
    {front: 'Very severe pain that interferes with daily life', back:"Not normal", normal:false},
    {front: 'Extremely heavy bleeding (such as soaking through one or more pads/tampons per hour)', back:"Not normal", normal: false},
    {front: 'After a few years of having a menstrual cycle, it is not normal to have sudden changes in your cycle (such as suddenly stopping for 3 or more months)', 
        back:'Not normal', normal:false
    }
]

function Normal() {

  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
  const [cards] = useState(() => shuffle(initialCards));
  const cardColors = ['#F2D88F', '#E36888', '#6698CC', '#B4B534', '#F08C21'];



  return (
    <>
    <Navbar/>
    <div className="normal-wrapper">
    <main className="normal-page">

    <section className="guidance-hero">
          <h1> What's Expected? </h1>
          <p>
            Your experience with your menstrual cycle is unique to you, but there
            are certain symptoms that are normal and some that may be cause for 
            concern. Click on the cards below to learn what to expect. 
          </p>
    </section>
    <div className="flashcard-grid">
        {cards.map((card, i) => (
             <Flashcard
             style={{ width: '300px', height: '300px'}}
             front={{ html: <h3>{card.front}</h3>, style: {
                backgroundColor: cardColors[i % cardColors.length],
                color: cardColors[i % cardColors.length] === '#F2D88F' ? '#1f1b24' : '#ffffff',
                padding: '22px',
                border: '1px solid cardColors[i % cardColors.length]',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
              }, }}
             back={{ html: <h4>{card.back}</h4> 
             , style: {
                backgroundColor: card.normal ? '#6B8F3E' : '#C0392B' ,
                border: '1px solid ' + card.normal ? '#6B8F3E' : '#C0392B', 
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
                textAlign: 'center',
              }, 
            }} className="custom-flashcard"
             />
        ))}
    </div>
    </main>
    </div>
   
    </>
  );
}

export default Normal