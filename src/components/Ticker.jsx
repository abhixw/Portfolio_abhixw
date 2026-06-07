export default function Ticker() {
  const skills = [
    "Python", "Java", "FastAPI", "React", "Generative AI", 
    "Agentic AI", "RAG", "MCP", "LangChain", "LangGraph", 
    "LLMs", "PostgreSQL", "Qdrant", "Redis", "MySQL", 
    "Docker", "Git", "GitHub"
  ]

  // Duplicate skills list for continuous scrolling track
  const trackSkills = [...skills, ...skills]

  return (
    <div className="ticker" aria-hidden="true">
      <div className="track">
        {trackSkills.map((skill, index) => (
          <span key={index}>{skill}</span>
        ))}
      </div>
    </div>
  )
}
