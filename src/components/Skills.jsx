import { useEffect, useState } from 'react'
import SectionWrapper, { SectionTitle } from './SectionWrapper'

const technicalSkills = [
    { name: 'Python', level: 95, icon: '🐍' },
    { name: 'Generative AI / LLMs', level: 90, icon: '🧠' },
    { name: 'RAG & Agentic Workflows', level: 88, icon: '🤖' },
    { name: 'FastAPI', level: 85, icon: '⚙️' },
    { name: 'Vector Databases (Qdrant)', level: 82, icon: '🗄️' },
    { name: 'Java / Data Structures', level: 80, icon: '☕' },
]

const professionalQualities = [
    { name: 'Problem Solving', level: 92, color: '#3b82f6' },
    { name: 'Innovation', level: 88, color: '#22c55e' },
    { name: 'Team Player', level: 90, color: '#f97316' },
    { name: 'Adaptability', level: 85, color: '#6366f1' },
    { name: 'Critical Thinking', level: 80, color: '#ec4899' },
    { name: 'Communication', level: 78, color: '#14b8a6' },
]

function ProgressBar({ name, level, icon }) {
    return (
        <div className="mb-6 last:mb-0">
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                    <span className="text-lg">{icon}</span>
                    <span className="text-sm font-semibold text-text-primary">{name}</span>
                </div>
                <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">{level}%</span>
            </div>
            <div className="h-2 w-full bg-surface-elevated rounded-full overflow-hidden border border-border/50">
                <div
                    className="h-full bg-gradient-to-r from-primary to-primary-light transition-all duration-1000 ease-out"
                    style={{ width: `${level}%` }}
                />
            </div>
        </div>
    )
}

function CircularChart({ name, level, color }) {
    const radius = 35
    const circumference = 2 * Math.PI * radius
    const offset = circumference - (level / 100) * circumference

    return (
        <div className="flex flex-col items-center group">
            <div className="relative w-24 h-24 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                    <circle
                        cx="48"
                        cy="48"
                        r={radius}
                        stroke="currentColor"
                        strokeWidth="6"
                        fill="transparent"
                        className="text-surface-elevated"
                    />
                    <circle
                        cx="48"
                        cy="48"
                        r={radius}
                        stroke={color}
                        strokeWidth="6"
                        fill="transparent"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                        className="transition-all duration-1000 ease-out"
                    />
                </svg>
                <span className="absolute text-sm font-bold text-text-primary">{level}%</span>
            </div>
            <span className="mt-2 text-xs font-medium text-text-secondary group-hover:text-primary transition-colors">{name}</span>
        </div>
    )
}

export default function Skills() {
    return (
        <SectionWrapper id="skills" className="relative overflow-hidden bg-transparent">
            <div className="relative z-10">
                <SectionTitle
                    title="Skills & Expertise"
                    subtitle="Technical proficiency and professional qualities."
                    accent="primary"
                />

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Technical Skills - Left Side */}
                    <div className="bg-surface-card/60 backdrop-blur-sm p-8 rounded-2xl border border-border shadow-sm">
                        <h3 className="text-xl font-bold text-text-primary mb-8 flex items-center gap-2">
                            <span className="w-2 h-6 bg-primary rounded-full" />
                            Technical Proficiency
                        </h3>
                        <div className="space-y-2">
                            {technicalSkills.map((skill) => (
                                <ProgressBar key={skill.name} {...skill} />
                            ))}
                        </div>
                    </div>

                    {/* Professional Qualities - Right Side */}
                    <div className="flex flex-col h-full">
                        <div className="bg-surface-card/60 backdrop-blur-sm p-8 rounded-2xl border border-border shadow-sm flex-1">
                            <h3 className="text-xl font-bold text-text-primary mb-10 flex items-center gap-2">
                                <span className="w-2 h-6 bg-accent-orange rounded-full" />
                                Professional Qualities
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-10 gap-x-4">
                                {professionalQualities.map((quality) => (
                                    <CircularChart key={quality.name} {...quality} />
                                ))}
                            </div>
                        </div>

                        {/* Additional info badge */}
                        <div className="mt-6 p-6 rounded-2xl bg-primary/5 border border-primary/10 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0 animate-pulse">
                                🚀
                            </div>
                            <p className="text-sm text-text-secondary leading-relaxed">
                                Constant learner focused on <span className="font-semibold text-primary">GenAI innovation</span> and <span className="font-semibold text-primary">Scalable AI Architecture</span>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}
