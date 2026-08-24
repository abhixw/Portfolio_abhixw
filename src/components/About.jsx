export default function About() {
  return (
    <section id="profile">
      <div className="eyebrow reveal">
        <span className="num">§01</span> Profile <span className="rule"></span> <span>Who is operating</span>
      </div>
      <div className="profile-grid">
        <div className="body reveal">
          <p>
            <span className="drop">B</span>.E. in Computer Science &amp; Design at Dayananda Sagar College of Engineering, Bengaluru — class of <strong>2027</strong>.
          </p>
          <p>
            I specialise in <strong>Generative AI</strong> and <strong>full stack development</strong>: designing agentic workflows, retrieval pipelines (RAG), and serving them at scale with FastAPI and React. I care about the unglamorous parts — throughput, reliability, and clean service boundaries — as much as the model on top.
          </p>
        </div>
        <div className="spec reveal" aria-label="Specification">
          <div className="spec-table">
            <div className="row">
              <div className="k">Education</div>
              <div className="v">B.E. CSD · DSCE</div>
            </div>
            <div className="row">
              <div className="k">CGPA</div>
              <div className="v">
                <b>8.97</b> / 10.0
              </div>
            </div>
            <div className="row">
              <div className="k">Location</div>
              <div className="v">Bengaluru, India</div>
            </div>
            <div className="row">
              <div className="k">Focus</div>
              <div className="v">
                GenAI · Full Stack
                <br />
                Agents · RAG
              </div>
            </div>
            <div className="row">
              <div className="k">Status</div>
              <div className="v">
                <b>Ex-Intern · AllCognix</b>
              </div>
            </div>
            <div className="row">
              <div className="k">Open to</div>
              <div className="v">Backend / AI roles</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
