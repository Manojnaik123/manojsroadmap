'use client';

import { useState } from 'react';
import {
  ChevronDown,
  ChevronRight,
  Briefcase,
  GraduationCap,
  BookOpen,
  Trophy,
  Landmark,
  Target,
} from 'lucide-react';

const roadmap = [
  {
    phase: 'Phase 1',
    title: 'Emergency Stabilization',
    timeline: 'June 2026 - September 2026',
    icon: Briefcase,
    color: 'border-red-500',
    goal: 'Get first income source and secure MCA continuation.',
    details: {
      objective:
        'Financial stability is the highest priority. Income solves MCA fees, confidence, and future planning.',
      dailyPlan: [
        '2 Hours DSA',
        '3 Hours Job Applications',
        '3 Hours Project Building',
      ],
      targets: [
        '20-30 job applications daily',
        '150-200 applications monthly',
        'First tech income source',
        'MCA fee planning',
      ],
      projects: [
        'Job Tracker (Next.js + PostgreSQL)',
        'AI Portfolio Website',
        'Full Stack SaaS Project',
      ],
      skills: [
        'React',
        'Next.js',
        'TypeScript',
        'Node.js',
        'Express',
        'MongoDB',
        'PostgreSQL',
        'Git',
        'Docker Basics',
      ],
    },
  },
  {
    phase: 'Phase 2',
    title: 'MCA Completion',
    timeline: 'Oct 2026 - Jun 2027',
    icon: GraduationCap,
    color: 'border-orange-500',
    goal: 'Complete MCA without backlogs.',
    details: {
      objective:
        'Finish degree while continuing to gain work experience.',
      focus: [
        'Pay remaining fees',
        'Complete assignments',
        'Clear all exams',
        'Avoid backlogs',
        'Continue earning',
      ],
      milestone: 'MCA Degree Completed',
    },
  },
  {
    phase: 'Phase 3',
    title: 'CS Foundation Building',
    timeline: '2027',
    icon: BookOpen,
    color: 'border-blue-500',
    goal: 'Master Computer Science fundamentals.',
    details: {
      subjects: [
        'Operating Systems',
        'DBMS',
        'Computer Networks',
        'OOP',
        'System Design Basics',
        'Data Structures',
        'Algorithms',
      ],
      outcome:
        'Strong interview performance and GATE readiness.',
    },
  },
  {
    phase: 'Phase 4',
    title: 'GATE Preparation',
    timeline: '2027 - 2028',
    icon: Trophy,
    color: 'border-green-500',
    goal: 'Open higher education and research opportunities.',
    details: {
      subjects: [
        'Engineering Mathematics',
        'DSA',
        'DBMS',
        'OS',
        'CN',
        'TOC',
        'Compiler Design',
      ],
      strategy: [
        'Previous Year Questions',
        'Weekly Mock Tests',
        'Revision Cycles',
        'Concept Mastery',
      ],
    },
  },
  {
    phase: 'Phase 5',
    title: 'Financial Independence',
    timeline: '2028',
    icon: Target,
    color: 'border-purple-500',
    goal: 'Become fully self-sustainable.',
    details: {
      expectations: [
        'MCA Completed',
        '2+ Years Experience',
        'Emergency Fund',
        'Better Salary',
        'Professional Confidence',
      ],
      target:
        'Build stable income and savings before bigger risks.',
    },
  },
  {
    phase: 'Phase 6',
    title: 'UPSC Decision Point',
    timeline: '2028 - 2030',
    icon: Landmark,
    color: 'border-yellow-500',
    goal: 'Attempt UPSC from a position of strength.',
    details: {
      conditions: [
        'Stable Job',
        'Savings Available',
        'MCA Completed',
        'No Financial Pressure',
      ],
      note:
        'Prepare because you want civil services, not because you need a career.',
    },
  },
];

export default function CareerCommandCenter() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#0f1117] text-white">
      <div className="max-w-6xl mx-auto px-4 py-10">

        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-300 text-sm">
            Career Command Center
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mt-4">
            Manoj's 2026 → 2030 Roadmap
          </h1>

          <p className="text-zinc-400 mt-4 text-lg max-w-3xl">
            Job → MCA Completion → CS Foundation → GATE →
            Financial Independence → UPSC
          </p>
        </div>

        <div className="mb-10 rounded-2xl border border-orange-500/20 bg-orange-500/10 p-6">
          <h2 className="text-2xl font-bold text-orange-300 mb-4">
            Current Mission (Next 90 Days)
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-zinc-200">
            <div>✅ Get a Software Job</div>
            <div>✅ Pay MCA Fees</div>
            <div>✅ Build Portfolio Projects</div>
            <div>✅ Improve DSA</div>
            <div>✅ Complete MCA Requirements</div>
            <div>✅ Create Financial Stability</div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-5 top-0 h-full w-[2px] bg-zinc-700" />

          {roadmap.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index} className="relative mb-6">
                <div
                  className={`absolute left-0 top-5 h-10 w-10 rounded-full bg-[#181c24] border-4 ${item.color} flex items-center justify-center`}
                >
                  <Icon size={18} />
                </div>

                <div className="ml-16">
                  <button
                    onClick={() =>
                      setOpen(open === index ? null : index)
                    }
                    className="w-full text-left bg-[#181c24] border border-zinc-800 rounded-2xl p-5 hover:border-orange-400 transition"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-orange-300">
                          {item.phase}
                        </p>

                        <h3 className="text-xl font-semibold">
                          {item.title}
                        </h3>

                        <p className="text-zinc-500 mt-1">
                          {item.timeline}
                        </p>

                        <p className="text-zinc-300 mt-3">
                          {item.goal}
                        </p>
                      </div>

                      {open === index ? (
                        <ChevronDown />
                      ) : (
                        <ChevronRight />
                      )}
                    </div>

                    {open === index && (
                      <div className="mt-6 border-t border-zinc-700 pt-6">
                        <pre className="whitespace-pre-wrap text-zinc-300 text-sm leading-7">
                          {JSON.stringify(item.details, null, 2)}
                        </pre>
                      </div>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 rounded-2xl border border-zinc-800 bg-[#181c24] p-6">
          <h2 className="text-2xl font-bold mb-4">
            Reminder
          </h2>

          <p className="text-zinc-300 leading-8">
            Your biggest challenge is not GATE. It is not UPSC.
            It is achieving financial stability while finishing MCA.
            Every step above is designed to move you from uncertainty
            toward independence. Focus on the current phase only.
            Do not fight battles from future phases yet.
          </p>
        </div>
      </div>
    </div>
  );
}

