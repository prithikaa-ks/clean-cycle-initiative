import { useState } from 'react';
import Navbar from '../components/Navbar';


const faqData = [
  {
    question: 'What are menstrual cycles?',
    answer: (
      <>
        <p>
          A menstrual cycle is a natural monthly process the body goes through
          to prepare for a possible pregnancy. It is controlled by hormones and
          involves changes in the ovaries and uterus.
        </p>

        <p>
          A cycle starts on the first day of a period and ends the day before
          the next period begins. During this time, the body builds up the
          lining of the uterus. If pregnancy does not occur, this lining is
          shed through the vagina as menstrual blood. This is what we call a
          period.
        </p>

        <p>
          Most cycles last between 21 and 35 days, with active bleeding
          typically lasting around 3 to 5 days. However, this can vary,
          especially during the first few years after periods begin.
        </p>
      </>
    ),
  },
  {
    question: 'Am I “dirty” or unclean during my period?',
    answer: (
      <p>
        Absolutely not! Menstruation is a natural and healthy part of the
        body’s reproductive cycle. Period blood is not dirty. It is made up of
        blood and tissue that the uterus sheds each month. Having your period
        does not make you unclean or change your personal value.
      </p>
    ),
  },
  {
    question:
      'How often should I change my pad, tampon, or other menstrual product?',
    answer: (
      <>
        <p>It is generally recommended to change:</p>

        <ul>
          <li>Pads every 4 to 6 hours, or sooner if they are full</li>
          <li>Tampons every 4 to 8 hours</li>
          <li>
            Menstrual cups every 8 to 12 hours, depending on flow and product
            instructions
          </li>
        </ul>

        <p>
          Changing products regularly helps reduce odor, leakage, discomfort,
          and the risk of infection.
        </p>
      </>
    ),
  },
  {
    question: 'Is it normal to have cramps during my period?',
    answer: (
      <>
        <p>
          Yes! Mild to moderate cramps are very common. They happen because the
          uterus contracts to help shed its lining.
        </p>

        <p>Things that may help include:</p>

        <ul>
          <li>Using mild heat, such as a heating pad or warm towel</li>
          <li>Resting</li>
          <li>Doing light movement or stretching</li>
          <li>Using over-the-counter pain relief when appropriate</li>
        </ul>

        <p>
          Severe pain that affects daily life should not be ignored. Speak with
          a healthcare provider if you experience extreme pain or bleeding.
        </p>
      </>
    ),
  },
  {
    question: 'Is it normal to have mood swings during my period?',
    answer: (
      <>
        <p>
          Yes! Hormonal changes during the menstrual cycle can affect emotions,
          energy levels, and mood. Some people may feel more emotional, tired,
          or irritable before or during their period.
        </p>

        <p>
          If mood changes feel very strong or interfere with daily life, it may
          be helpful to speak with a healthcare provider or trusted adult.
        </p>
      </>
    ),
  },
  {
    question: 'What is a normal period?',
    answer: (
      <>
        <p>A “normal” period can vary from person to person. In general:</p>

        <ul>
          <li>A cycle often occurs every 21 to 35 days</li>
          <li>Bleeding can last 2 to 7 days</li>
          <li>Flow can be light, moderate, or heavy</li>
          <li>
            Periods may be irregular during the first few years after they
            begin
          </li>
        </ul>
      </>
    ),
  },
  {
    question: 'When should I be concerned about my period?',
    answer: (
      <>
        <p>
          Consider speaking with a healthcare provider if you experience:
        </p>

        <ul>
          <li>
            Very heavy bleeding, such as soaking a pad or tampon every hour for
            several hours
          </li>
          <li>Periods regularly lasting longer than 7 to 8 days</li>
          <li>Severe pain that does not improve with usual care</li>
          <li>Very irregular cycles after they have been established</li>
          <li>Extreme fatigue, dizziness, weakness, or fainting</li>
        </ul>
      </>
    ),
  },
  {
    question:
      'Can I still go to school, work, or exercise during my period?',
    answer: (
      <p>
        Yes! It is safe to continue normal daily activities during your period.
        Some people may feel more comfortable resting, but movement and exercise
        can sometimes help reduce cramps and improve mood. Listen to your body
        and choose the level of activity that feels comfortable.
      </p>
    ),
  },
  {
    question: 'Is it okay to talk about periods?',
    answer: (
      <p>
        Of course! Menstruation is a normal health topic. Talking about it helps
        reduce stigma and makes it easier for people to receive accurate
        information, products, and support.
      </p>
    ),
  },
];

function FAQ() {
  const [flippedCards, setFlippedCards] = useState([]);

  const toggleCard = (index) => {
    setFlippedCards((currentCards) =>
      currentCards.includes(index)
        ? currentCards.filter((cardIndex) => cardIndex !== index)
        : [...currentCards, index]
    );
  };

  return (
    <>
      <Navbar />

      <main className="faq-page">
        <section className="faq-heading-container">
          <h1>Frequently Asked Questions</h1>

          <p>
            Here are some frequently asked questions about menstrual cycles and
            menstrual health. Have a question that is not listed here? Email us
            at{' '}
            <a href="mailto:cleancycleinitiative@gmail.com">
              cleancycleinitiative@gmail.com
            </a>
            .
          </p>
        </section>

        <section className="faq-grid" aria-label="Frequently asked questions">
          {faqData.map((faq, index) => {
            const isFlipped = flippedCards.includes(index);

            return (
              <button
                className={`faq-card ${isFlipped ? 'is-flipped' : ''}`}
                key={faq.question}
                type="button"
                onClick={() => toggleCard(index)}
                aria-expanded={isFlipped}
              >
                <span className="faq-card-inner">
                  <span className="faq-card-front">
                    <span className="faq-number">
                      Question {index + 1}
                    </span>

                    <span className="faq-question">{faq.question}</span>

                    <span className="faq-instruction">
                      Click to see the answer
                    </span>
                  </span>

                  <span className="faq-card-back">
                    <span className="faq-answer-title">Answer</span>

                    <span className="faq-answer">{faq.answer}</span>

                    <span className="faq-instruction">
                      Click to return to the question
                    </span>
                  </span>
                </span>
              </button>
            );
          })}
        </section>

        <section className="faq-contact">
          <h2>Still have a question?</h2>

          <p>
            Reach out to the Clean Cycle Initiative team and we will help you
            find the information you need.
          </p>

          <a
            className="faq-contact-button"
            href="mailto:cleancycleinitiative@gmail.com"
          >
            Send Us an Email
          </a>
        </section>
      </main>
    </>
  );
}

export default FAQ;