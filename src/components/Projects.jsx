export default function Projects() {
  const cases = [
    {
      idx: "01",
      title: "SignalStack",
      tagline: "AI-Powered Hiring Platform · 2026",
      description: "An AI-powered hiring platform leveraging GitHub activity for candidate assessment. Built a FastAPI backend integrating GitHub API and Gemini 2.5 Flash for AI-driven candidate evaluation, and a React + Vite dashboard with scoring, audit logging, and evaluation workflows.",
      chips: ["FastAPI", "Gemini 2.5", "React", "GitHub API"],
      link: "https://github.com/abhixw/SignalStack",
      stamp: "AI ASSESSMENT\nSCORING DASHBOARD"
    },
    {
      idx: "02",
      title: "InterXAI",
      tagline: "Autonomous AI Proctoring & Interviews · 2025",
      description: "An agentic AI-powered interview orchestration platform integrating Meta LLaMA via LangChain for adaptive questioning and real-time OpenCV-based computer vision proctoring to track behavioral violations and prevent malpractice.",
      chips: ["React", "Django", "OpenCV", "LangChain", "LLaMA"],
      link: "https://github.com/abhixw/interXAI",
      stamp: "AI PROCTORING\nADAPTIVE AGENTS"
    },
    {
      idx: "03",
      title: "GitaMind",
      tagline: "Bhagavad Gita Agentic RAG Assistant · 2026",
      description: "An Agentic RAG assistant grounded in the Bhagavad Gita using LangGraph orchestration. Implemented planner, router, and critic agents with verse-level citation support. Integrated Groq LLaMA-3.1, Qdrant vector search, and a FastAPI-based voice-enabled interface.",
      chips: ["LangGraph", "LLaMA-3.1", "Qdrant", "FastAPI", "Groq"],
      link: "https://github.com/abhixw/GitaMind",
      stamp: "AGENTIC RAG\nVOICE INTERFACE"
    }
  ]

  return (
    <section id="work">
      <div className="eyebrow reveal">
        <span className="num">§03</span> Field Work <span className="rule"></span> <span>Selected case files</span>
      </div>
      <div className="cases">
        {cases.map((project) => (
          <article className="case reveal" key={project.idx}>
            <div className="idx">
              {project.idx}
              <small>CASE FILE</small>
            </div>
            <div className="main">
              <h3>{project.title}</h3>
              <div className="tagline">{project.tagline}</div>
              <p>{project.description}</p>
              <div className="chips">
                {project.chips.map((chip) => (
                  <span className="tag" key={chip}>
                    {chip}
                  </span>
                ))}
              </div>
            </div>
            <div className="meta">
              <a className="view" href={project.link} target="_blank" rel="noopener noreferrer">
                View <span className="ar">↗</span>
              </a>
              <div className="stamp">
                {project.stamp.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
