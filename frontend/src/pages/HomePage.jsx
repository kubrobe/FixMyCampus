import Badge from '@/components/ui/Badge.jsx'
import Card from '@/components/ui/Card.jsx'
import Icon from '@/components/ui/Icon.jsx'
import { CAMPUS_NAME } from '@/lib/config.js'

const STEPS = [
  {
    icon: 'camera',
    title: 'Report',
    body: 'Snap a photo, pin the location and describe the problem in a few seconds.',
  },
  {
    icon: 'spark',
    title: 'Classify',
    body: 'Issues are sorted by category and urgency so nothing sits in the wrong queue.',
  },
  {
    icon: 'route',
    title: 'Route',
    body: 'Each report reaches the department responsible for fixing it.',
  },
  {
    icon: 'check',
    title: 'Resolve',
    body: 'Follow the status from submitted to fixed, with updates along the way.',
  },
]

const STATS = ['Open issues', 'In progress', 'Resolved this month', 'Avg. resolution time']

const ROADMAP = [
  { title: 'Frontend foundation', detail: 'App shell, design system, project setup', status: 'current' },
  { title: 'Accounts & sign-in', detail: 'Student and staff authentication', status: 'planned' },
  { title: 'Issue reporting', detail: 'Submit reports with photos and locations', status: 'planned' },
  { title: 'Smart classification', detail: 'Automatic category and priority suggestions', status: 'planned' },
  { title: 'Analytics', detail: 'Trends and resolution metrics for administrators', status: 'planned' },
]

function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold tracking-[0.14em] text-jade-400 uppercase">{eyebrow}</p>
      <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-[28px]">
        {title}
      </h2>
      {children && <p className="mt-3 text-[15px] leading-relaxed text-navy-300">{children}</p>}
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="space-y-20 sm:space-y-24">
      {/* Hero */}
      <section className="animate-fade-up pt-2 sm:pt-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="jade">
            <span className="size-1.5 rounded-full bg-jade-400" />
            In development
          </Badge>
          <Badge>{CAMPUS_NAME}</Badge>
        </div>

        <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.1] font-extrabold tracking-tight text-white sm:text-5xl lg:text-[56px]">
          Campus issues,{' '}
          <span className="bg-gradient-to-r from-jade-300 to-jade-500 bg-clip-text text-transparent">
            reported once
          </span>{' '}
          and resolved faster.
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-navy-300 sm:text-lg">
          FixMyCampus gives students and staff one clear place to report broken equipment,
          facility problems and safety concerns, and lets the university track every report until
          it is fixed.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="button"
            disabled
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-jade-500 px-5 py-3 text-sm font-semibold text-navy-950 opacity-60 disabled:cursor-not-allowed"
            title="Reporting is not available yet"
          >
            <Icon name="plus" className="size-4" />
            Report an issue
          </button>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-navy-100 transition-colors hover:border-white/20 hover:bg-white/[0.04]"
          >
            How it works
          </a>
          <span className="text-xs text-navy-400 sm:ml-2">Reporting opens in an upcoming release.</span>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="scroll-mt-24">
        <SectionHeading eyebrow="How it works" title="From report to resolution">
          A simple flow designed for a busy campus.
        </SectionHeading>
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <li key={step.title}>
              <Card className="h-full transition-colors hover:border-jade-400/20">
                <div className="flex items-center justify-between">
                  <span className="grid size-10 place-items-center rounded-xl bg-jade-400/10 text-jade-300 ring-1 ring-jade-400/20">
                    <Icon name={step.icon} />
                  </span>
                  <span className="font-display text-sm font-bold text-navy-500">0{i + 1}</span>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-300">{step.body}</p>
              </Card>
            </li>
          ))}
        </ol>
      </section>

      {/* Dashboard preview */}
      <section>
        <SectionHeading eyebrow="Dashboard" title="Overview">
          Live figures will appear here once issue reporting is connected. Nothing is being
          tracked yet.
        </SectionHeading>

        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {STATS.map((label) => (
            <Card key={label} className="p-5">
              <p className="text-xs font-medium text-navy-400">{label}</p>
              <p className="mt-3 font-display text-3xl font-bold text-navy-500">—</p>
              <p className="mt-1 text-xs text-navy-500">No data yet</p>
            </Card>
          ))}
        </div>

        <Card className="mt-4 flex flex-col items-center px-6 py-14 text-center">
          <span className="grid size-12 place-items-center rounded-2xl bg-white/[0.04] text-navy-300 ring-1 ring-white/10">
            <Icon name="inbox" className="size-6" />
          </span>
          <h3 className="mt-4 font-display text-base font-semibold text-white">No issues yet</h3>
          <p className="mt-1.5 max-w-sm text-sm text-navy-400">
            Recent reports will be listed here after accounts and issue storage are set up.
          </p>
        </Card>
      </section>

      {/* Roadmap */}
      <section>
        <SectionHeading eyebrow="Roadmap" title="What's being built" />
        <Card className="mt-8 divide-y divide-white/[0.06] p-0">
          {ROADMAP.map((item) => (
            <div key={item.title} className="flex items-center gap-4 px-5 py-4 sm:px-6">
              <span
                className={
                  item.status === 'current'
                    ? 'size-2.5 shrink-0 rounded-full bg-jade-400 shadow-[0_0_0_4px_rgba(52,211,153,0.15)]'
                    : 'size-2.5 shrink-0 rounded-full bg-navy-600'
                }
              />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="mt-0.5 text-sm text-navy-400">{item.detail}</p>
              </div>
              <Badge tone={item.status === 'current' ? 'jade' : 'muted'}>
                {item.status === 'current' ? 'In progress' : 'Planned'}
              </Badge>
            </div>
          ))}
        </Card>
      </section>

      <footer className="border-t border-white/[0.06] pt-6 pb-2 text-xs text-navy-500">
        FixMyCampus · Built for {CAMPUS_NAME}
      </footer>
    </div>
  )
}
