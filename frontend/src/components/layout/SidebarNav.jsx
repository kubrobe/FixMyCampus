import Icon from '@/components/ui/Icon.jsx'
import { cn } from '@/lib/cn.js'
import { NAV_ITEMS } from './navigation.js'

export default function SidebarNav({ activeId = 'overview' }) {
  return (
    <nav aria-label="Main" className="flex flex-col gap-1">
      {NAV_ITEMS.map((item) => {
        const active = item.id === activeId
        return (
          <a
            key={item.id}
            href={item.available ? '#' : undefined}
            aria-current={active ? 'page' : undefined}
            aria-disabled={!item.available || undefined}
            className={cn(
              'group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors',
              active
                ? 'bg-jade-400/10 text-jade-300 ring-1 ring-jade-400/20'
                : item.available
                  ? 'text-navy-200 hover:bg-white/[0.04] hover:text-white'
                  : 'cursor-not-allowed text-navy-400',
            )}
          >
            <Icon name={item.icon} className="size-[18px] shrink-0" />
            <span className="flex-1">{item.label}</span>
            {!item.available && (
              <span className="rounded-md bg-white/[0.04] px-1.5 py-0.5 text-[10px] font-semibold tracking-wide text-navy-400 uppercase">
                Soon
              </span>
            )}
          </a>
        )
      })}
    </nav>
  )
}
