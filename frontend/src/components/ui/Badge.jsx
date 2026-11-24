import { cn } from '@/lib/cn.js'

const tones = {
  jade: 'border-jade-400/20 bg-jade-400/10 text-jade-300',
  muted: 'border-white/10 bg-white/[0.04] text-navy-200',
}

export default function Badge({ tone = 'muted', className, children }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium',
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}
