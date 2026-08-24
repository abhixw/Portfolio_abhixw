export default function Experience() {
  return (
    <section id="record" className="record">
      <div className="inner">
        <div className="eyebrow reveal">
          <span className="num">§04</span> Service Record <span className="rule"></span> <span>Experience log</span>
        </div>

        <div className="tl-item reveal">
          <div className="when">
            <div className="dates">May 2026 — Jul 2026</div>
            <div className="live">
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--bg)', display: 'inline-block' }}></span>
              Completed
            </div>
            <div className="place">Bengaluru, India</div>
          </div>
          <div>
            <h3>AllCognix AI Technologies</h3>
            <div className="who">AI &amp; Full Stack Development Intern</div>
            <ul>
              <li>Developed AI agents and multi-agent workflows using LangChain and LangGraph to automate social media content generation.</li>
              <li>Built an AI-powered Idea Validator with FastAPI and React, integrating Keycloak-based authentication and PostgreSQL for multi-user application data management.</li>
              <li>Technologies Used: Python, FastAPI, React, PostgreSQL, OpenAI API, LangChain, LangGraph, Keycloak</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
