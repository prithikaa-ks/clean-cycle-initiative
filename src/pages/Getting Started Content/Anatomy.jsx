import Navbar from '../../components/Navbar';
import { useState } from 'react';
//no jumpscare
const externalParts = [
    {
        id: 'vulva',
        name: 'Vulva',
        nepali: 'यौनीद्वारको बाहिरी भाग (Younidwarko Bahiri Bhaag)',
        hindi: 'बाहरी जननांग (Bahari Jananang)',
        description: 'General term for all external parts of the genital area',
    },
    {
        id: 'labia',
        name: 'Labia',
        nepali: 'योनीका ठूला र साना ओठहरू (Younika Thula ra Sana Ohatharu)',
        hindi: 'बाहरी और भीतरी होंठ (Bahari aur Bheetri Honth)',
        description: 'Skin folds that protect the inner openings.',
    },
    {
        id: 'urethra',
        name: 'Urethra',
        nepali: 'मुत्रमार्ग (Mutramarga)',
        hindi: 'मूत्रमार्ग (Mootramarg)',
        description: 'Opening for urine to exit the body.',
    },
    {
        id: 'vaginal-opening',
        name: 'Vaginal Opening',
        nepali: 'योनी मार्गको प्वाल (Youni Margako Pwal)',
        hindi: 'योनि का द्वार (Yoni ka Dwaar)',
        description: 'Opening for period blood to exit the body and where a baby is born.',
    },
    {
        id: 'anus',
        name: 'Anus',
        nepali: ' मलद्वार (Malduwar)',
        hindi: 'गुदा (Guda)',
        description: 'Opening for stool to exit the body',
    },
    {
        id: 'hymen',
        name: 'Hymen',
        nepali: 'योनिच्छद (Yonichhad)',
        hindi: 'योनिच्छद (Yonichhad)',
        description: 'Thin and stretchy piece of tissue partly covering the vaginal opening',
    },
];

const internalParts = [
    {
        id: 'vagina',
        name: 'Vagina',
        nepali: 'योनी (Youni)',
        hindi: 'योनि (Yoni)',
        description: 'Elastic and muscular tube that connects the outside of the body to the uterus',
    },
    {
        id: 'uterus',
        name: 'Uterus',
        nepali: 'पाठेघर (Paatheghar)',
        hindi: 'गर्भाशय (Garbhashay)',
        description: 'Organ that builds up a lining of blood each month, and also where a baby grows. It is also called the womb.',
    },
    {
        id: 'cervix',
        name: 'Cervix',
        nepali: 'पाठेघरको मुख (Paathegharko Mukh)',
        hindi: 'गर्भाशय ग्रीवा (Garbhashay Greeva)',
        description: 'The area that opens during a menstrual cycle to allow blood to pass into the vagina.',
    },
    {
        id: 'fallopian-tubes',
        name: 'Fallopian Tubes',
        nepali: 'डिम्बबाहिनी नली (Dimbabahinee Nalee)',
        hindi: 'डिम्बवाहिनी नलिकाएं (Dimbavahinee Nalikaen)',
        description: 'Two narrow pathways that connect the ovaries to the uterus',
    },
    {
        id: 'ovaries',
        name: 'Ovaries',
        nepali: 'डिम्बाशय (Dimbashaya)',
        hindi: 'अंडाशय (Andashay)',
        description: 'Two small, almond-shaped organs on either side of the uterus that hold all of the eggs and produce the hormones that regulate the menstrual cycle (estrogen and progesterone)',
    }, 
];

function Anatomy() {
  const [selectedExternal, setSelectedExternal] = useState(externalParts[0]);
  const [selectedInternal, setSelectedInternal] = useState(internalParts[0]);

  return (
    <>
      <Navbar />

      <div className="guidance-wrapper">
        <main className="guidance-page">
          <section className="guidance-hero">
            <h1>Anatomy</h1>
            <p>
              Understanding your body can make your cycle feel less confusing.
              This page explains the external and internal parts involved in
              reproductive health and menstruation.
            </p>
          </section>

          <section className="guidance-section">
            <h2>External Anatomy</h2>
            <p>
              These are the parts on the outside of the body. Click each part to
              learn its name and what it does.
            </p>

            

            <div className="anatomy-layout">
              <div className="anatomy-button-grid">
                {externalParts.map((part) => (
                  <button
                    key={part.id}
                    className={`anatomy-part-button ${
                      selectedExternal.id === part.id ? 'selected' : ''
                    }`}
                    onClick={() => setSelectedExternal(part)}
                  >
                    {part.name}
                  </button>
                ))}
              </div>

              <div className="anatomy-info-card">
                <h3>{selectedExternal.name}</h3>
                <p><strong>Nepali:</strong> {selectedExternal.nepali}</p>
                <p><strong>Hindi:</strong> {selectedExternal.hindi}</p>
                <p>{selectedExternal.description}</p>
              </div>
            </div>
          </section>

          <section className="guidance-section">
            <h2>Internal Anatomy</h2>
            <p>
              These are the parts inside the body that are connected to the
              menstrual cycle and reproduction.
            </p>
            <img
                src="/internal-anatomy.png"
                alt="Diagram of internal female reproductive anatomy"
                className="anatomy-image"
            />

            <div className="anatomy-layout">
              <div className="anatomy-button-grid">
                {internalParts.map((part) => (
                  <button
                    key={part.id}
                    className={`anatomy-part-button ${
                      selectedInternal.id === part.id ? 'selected' : ''
                    }`}
                    onClick={() => setSelectedInternal(part)}
                  >
                    {part.name}
                  </button>
                ))}
              </div>

              <div className="anatomy-info-card">
                <h3>{selectedInternal.name}</h3>
                <p><strong>Nepali:</strong> {selectedInternal.nepali}</p>
                <p><strong>Hindi:</strong> {selectedInternal.hindi}</p>
                <p>{selectedInternal.description}</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default Anatomy;