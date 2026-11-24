import { cn } from '@/lib/cn.js'

export default function Card({ className, children, ...props }) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-white/[0.06] bg-navy-900/60 p-6 shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset] backdrop-blur-sm',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
