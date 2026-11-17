
import "./page.css";

export default function Different() {
  return (
    <section className="view-section">

      {/* Header */}
      <div className="section-header">
  

        <h1>How looking here is different</h1>

        <p>
          The same questions a buyer actually has,
          without handing over their phone number.
        </p>
      </div>

      {/* Comparison Cards */}
      <div className="comparison-cards">

        <div className="comparison-card portal-card">
          <span className="card-label">THE BROCHURE</span>

          <h2>Online Portals</h2>

          <h3>Leads with the view.</h3>

          <ul>
            <li>A render and a list of amenities.</li>
            <li>The price, when it appears, says &quot;on request&quot;.</li>
            <li>The next step is sharing your number.</li>
          </ul>
        </div>

        <div className="comparison-card propstoxx-card">
          <span className="card-label">THE PROPSTOXX WAY</span>

          <h2>PropStoxx</h2>

          <h3>Leads with the price.</h3>

          <ul>
            <li>Price, place and stage are already visible.</li>
            <li>Compare two or three properties on this page.</li>
            <li>Property details are available in the app.</li>
          </ul>
        </div>

      </div>

      {/* Comparison Table */}
      <div className="comparison-table-wrapper">
        <h2>Compare the experience</h2>

        <table className="comparison-table">
          <thead>
            <tr>
              <th>WHAT YOU WANT TO KNOW</th>
              <th>ON PROPSTOXX</th>
              <th>ON A TYPICAL PORTAL</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>The Price</td>
              <td>Visible on the card</td>
              <td>Often &quot;on request&quot;</td>
            </tr>

            <tr>
              <td>Your Phone Number</td>
              <td>Not required to browse</td>
              <td>May be required</td>
            </tr>

            <tr>
              <td>What happens next</td>
              <td>Compare on this page</td>
              <td>Calls and messages start</td>
            </tr>

            <tr>
              <td>What the brochure skips</td>
              <td>Detailed information in the app</td>
              <td>Left for a sales conversation</td>
            </tr>

            <tr>
              <td>Holding today&apos;s price</td>
              <td>Explore price-lock options</td>
              <td>Depends on the seller</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Steps */}
      <div className="process-section">

        <h2>A simpler way to find your property</h2>

        <div className="process-grid">

          <div className="process-card">
            <span>01</span>
            <h3>Look</h3>
            <p>
              Open any property. The price is ready on the card.
            </p>
          </div>

          <div className="process-card">
            <span>02</span>
            <h3>Compare</h3>
            <p>
              Line up two or three properties without leaving this page.
            </p>
          </div>

          <div className="process-card">
            <span>03</span>
            <h3>Read</h3>
            <p>
              Reports, maps and detailed property sheets live in the app.
            </p>
          </div>

          <div className="process-card">
            <span>04</span>
            <h3>Hold</h3>
            <p>
              Explore available price-lock options if you want to.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}
