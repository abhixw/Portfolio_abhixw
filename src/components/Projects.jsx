export default function Projects() {
  const cases = [
    {
      idx: "01",
      title: "SignalStack",
      tagline: "AI-Powered Hiring Platform · 2026",
      description: "An AI-powered hiring platform leveraging GitHub activity for candidate assessment. Built a FastAPI backend integrating GitHub API and Gemini 2.5 Flash for AI-driven candidate evaluation, and a React + Vite dashboard with scoring, audit logging, and evaluation workflows.",
      chips: ["FastAPI", "Gemini 2.5", "React", "GitHub API"],
      link: "https://github.com/abhixw/SignaXAI",
      stamp: "AI ASSESSMENT\nSCORING DASHBOARD"
    },
    {
      idx: "02",
      title: "InterXAI",
      tagline: "Backend-Driven AI Interview Platform · 2025",
      description: "A backend-driven interview platform with specialized AI agents for resume screening, adaptive questioning, evaluation, and feedback generation, processing interviews end-to-end without manual intervention. Built an asynchronous processing pipeline using TaskIQ and Redis for background task execution, caching, and workflow orchestration, plus real-time monitoring — tab-switch detection, developer-tools detection, multiple-person detection, and interview state recovery during network interruptions.",
      chips: ["FastAPI", "TaskIQ", "Redis", "Docker", "OpenCV"],
      link: "https://github.com/abhixw/interXAI",
      stamp: "AI PROCTORING\nASYNC PIPELINE"
    },
    {
      idx: "03",
      title: "GitaMind",
      tagline: "Bhagavad Gita Agentic RAG Assistant · 2026",
      description: "An Agentic RAG assistant grounded in the Bhagavad Gita using LangGraph orchestration. Implemented planner, router, and critic agents with verse-level citation support. Integrated Groq LLaMA-3.1, Qdrant vector search, and a FastAPI-based voice-enabled interface.",
      chips: ["LangGraph", "LLaMA-3.1", "Qdrant", "FastAPI", "Groq"],
      link: "https://github.com/abhixw/GitaMind",
      stamp: "AGENTIC RAG\nVOICE INTERFACE"
    },
    {
      idx: "04",
      title: "Uroflowmetry",
      tagline: "AI-Powered Clinical Flow Analysis · 2026",
      description: "An end-to-end application for automated uroflowmetry analysis using computer vision and a physics-based model for clinical flow measurement. Built REST APIs with FastAPI integrated with a React frontend for video analysis, report generation, and data visualization, with image preprocessing, stream segmentation, ROI tracking, and geometric feature extraction via OpenCV — containerized with Docker and PostgreSQL for persistent data and automated clinical reporting.",
      chips: ["OpenCV", "FastAPI", "React", "PostgreSQL", "Docker"],
      link: "https://github.com/abhixw/Uroflowmetry",
      stamp: "COMPUTER VISION\nCLINICAL REPORTING"
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
