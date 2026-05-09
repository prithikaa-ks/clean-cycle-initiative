import Navbar from '../components/Navbar';

function SimpleGuidance() {
  return (
    <>
      <Navbar />
    <div classname="guidance-wrapper">
      <main className="guidance-page">
        <section className="guidance-hero">
          <h1>Simple Guidance for Monthly Care</h1>
          <p>
            Getting through your cycle can feel overwhelming, especially when there is a lot
            of information out there. This page gives simple, clear guidance to help you
            understand common menstrual products and basic hygiene habits.
          </p>
        </section>

        <section className="guidance-section">
          <h2>Understanding Menstrual Products</h2>
          <p>
            There are several types of menstrual products, and each one works a little differently:
          </p>

          <div className="product-list">
            <div className="product-card">
              <h3>Pads</h3>
              <p>Worn inside undergarments to absorb flow.</p>
            </div>

            <div className="product-card">
              <h3>Tampons</h3>
              <p>Inserted inside the body to absorb flow.</p>
            </div>

            <div className="product-card">
              <h3>Menstrual Cups</h3>
              <p>U-shaped cups used inside the body to collect flow.</p>
            </div>

            <div className="product-card">
              <h3>Period Underwear</h3>
              <p>Thicker undergarments that absorb flow.</p>
            </div>

            <div className="product-card">
              <h3>Reusable Cloth Pads</h3>
              <p>Washable and reusable absorbent pads.</p>
            </div>
          </div>
        </section>

        <section className="guidance-section">
          <h2>Product Usage & Hygiene Basics</h2>
          <p>
            Maintaining cleanliness during the menstrual cycle is important because it can
            help prevent discomfort, irritation, and infection.
          </p>

          <ul className="guidance-list">
            <li>Wash hands before and after changing products.</li>
            <li>Change products regularly throughout the day.</li>
            <li>Keep the body as clean as possible.</li>
            <li>Use clean materials whenever possible.</li>
          </ul>
        </section>

        <section className="guidance-section">
          <h2>How Often Should Products Be Changed?</h2>
          <p>
            To help avoid leakage and irritation, menstrual products should be changed regularly.
          </p>

          <ul className="guidance-list">
            <li>Pads should be changed every few hours or when full.</li>
            <li>Tampons should usually be changed every 4–8 hours.</li>
            <li>Menstrual cups should be emptied and cleaned once or twice a day.</li>
            <li>Reusable cloth pads should be washed and dried after each use.</li>
          </ul>
        </section>
      </main>
      </div>
    </>
  );
}

export default SimpleGuidance;