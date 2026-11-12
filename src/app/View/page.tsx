
import Link from "next/link";
import "./page.css";

export default function ViewPage() {
  const questions = [
    {
      number: "01",
      title: "Is the price fair",
      description:" The band ,set against prices in the same pocket on the city.",
       link: "Buy a report in the app",
      href: "/dashboard",
    },
    {
      number: "02",
      title: "Does the location work every dat? ",
      description:"Commute , schools and errands from the address ,not from a brochure map"
        , link: "Open the map in the app",
      href: "/dashboard",
    },
    {
      number: "03",
      title: "What does the Brochure leave out ?",
      description:" Charges, clauses and timelines,written in the plain lines"
        , link: "Read the details sheet in the app",
      href: "/dashboard",
    },
    {
      number: "04",
      title: "What does locking a price do ?",
      description:"It hold the number you saw for a window you choose ,while you decide"
      ,  link: "Lock the price in the app",
      href: "/dashboard",
    },
  ];

  return (
    <section className="view-section">

      <div className="view-header">
    

        <h1>
          A clearer <span>View.</span>
        </h1>

        <p>
          Four important questions. Each one helps you make
          a smarter and more confident property decision.
        </p>
      </div>

      <div className="questions-container">

        {questions.map((item) => (
          <div className="question-card" key={item.number}>

            <div className="question-number">
              {item.number}
            </div>

            <div className="question-content">
              <h2>{item.title}</h2>

              <p>{item.description}</p>

              <Link href={item.href} className="question-link">
                {item.link}
                <span>↗</span>
              </Link>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}
