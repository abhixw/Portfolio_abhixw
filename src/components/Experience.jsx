export default function Experience() {
  return (
    <section id="record" className="record">
      <div className="inner">
        <div className="eyebrow reveal">
          <span className="num">§04</span> Service Record <span className="rule"></span> <span>Experience log</span>
        </div>

        <div className="tl-item reveal">
          <div className="when">
            <div className="dates">May 2025 — Present</div>
            <div className="live">
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--bg)', display: 'inline-block' }}></span>
              Active
            </div>
            <div className="place">Remote</div>
          </div>
          <div>
            <h3>AllCognix AI Technologies</h3>
            <div className="who">Generative AI &amp; Full Stack Development Intern</div>
            <ul>
              <li>Built agents and multi-agent workflows using LangChain and LangGraph for social media automation platform.</li>
              <li>Developing AI-powered template generation features using LLM APIs.</li>
              <li>Technologies Used: React, JavaScript, FastAPI, Python, PostgreSQL, OpenAI API</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
