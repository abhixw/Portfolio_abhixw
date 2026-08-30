export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Profile photo — top-right */}
      <div className="hero-photo reveal">
        <div className="hero-photo-frame">
          <img src="/abhinav.jpg" alt="Abhinav Shrimali" />
        </div>
      </div>

      <div className="docline reveal">
        <span>Status — <b>Open to full-time roles</b></span>
        <span>Discipline — <b>GenAI / Full Stack</b></span>
        <span>Base — <b>Bengaluru, IN</b></span>
        <span>Issue — <b>2026.08</b></span>
      </div>
      <h1 className="reveal">
        Abhinav<span className="l2"><em>Shrimali</em></span>
      </h1>

      <div className="meta">
        <p className="lead reveal">
          I build <b>AI systems</b> and the <b>backend infrastructure</b> that runs them — LLM pipelines, RAG, agents, and full stack applications.
        </p>
        <div className="right reveal">
          <div className="role">
            Generative AI Engineer
            <br />
            Full Stack Developer
            <br />
            Agentic RAG Specialist
          </div>
          <div className="cta">
            <a className="btn fill" href="#work">
              View Field Work <span className="ar">→</span>
            </a>
            <a className="btn ghost" href="/RESUME_COMPANY_PLACEMENT.pdf" target="_blank" rel="noopener noreferrer">
              Résumé
            </a>
          </div>
        </div>
      </div>

      <div className="social reveal">
        <a href="https://github.com/abhixw" target="_blank" rel="noopener noreferrer">
          <span>GitHub</span>
          <span className="k">abhixw ↗</span>
        </a>
        <a href="https://linkedin.com/in/abhixw" target="_blank" rel="noopener noreferrer">
          <span>LinkedIn</span>
          <span className="k">in/abhixw ↗</span>
        </a>
        <a href="mailto:abhinavshrimali03@gmail.com">
          <span>Email</span>
          <span className="k">abhinavshrimali03@gmail.com ↗</span>
        </a>
        <a href="https://leetcode.com/u/7GM6BnwUWi/" target="_blank" rel="noopener noreferrer">
          <span>LeetCode</span>
          <span className="k">7GM6BnwUWi ↗</span>
        </a>
      </div>
    </section>
  )
}
