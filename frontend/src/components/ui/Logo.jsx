import { APP_NAME } from '@/lib/config.js'

export default function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-jade-400 to-jade-600 shadow-lg shadow-jade-500/20">
        <svg viewBox="0 0 24 24" className="size-4.5 text-navy-950" aria-hidden="true">
          <path
            d="M5 12.5l4.5 4.5L19 7.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="font-display text-[15px] font-bold tracking-tight text-white">
        {APP_NAME}
      </span>
    </div>
  )
}
