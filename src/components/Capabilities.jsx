export default function Capabilities() {
  const categories = [
    {
      title: "Languages",
      num: "01",
      skills: ["Python", "Java"]
    },
    {
      title: "AI / ML",
      num: "02",
      skills: ["Generative AI", "Agentic AI", "RAG", "MCP", "LangChain", "LangGraph", "LLMs"]
    },
    {
      title: "Full Stack",
      num: "03",
      skills: ["FastAPI", "React"]
    },
    {
      title: "Databases",
      num: "04",
      skills: ["PostgreSQL", "Qdrant", "Redis", "MySQL"]
    },
    {
      title: "Dev Tools",
      num: "05",
      skills: ["Docker", "Git", "GitHub"]
    }
  ]

  return (
    <section id="capabilities">
      <div className="eyebrow reveal">
        <span className="num">§02</span> Capabilities <span className="rule"></span> <span>Systems index</span>
      </div>
      <div className="cap reveal">
        {categories.map((cat) => (
          <div className="col" key={cat.title}>
            <h3>
              {cat.title} <span>{cat.num}</span>
            </h3>
            <ul>
              {cat.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
