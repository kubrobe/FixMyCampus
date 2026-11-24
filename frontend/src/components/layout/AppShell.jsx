import { useEffect, useState } from 'react'
import Icon from '@/components/ui/Icon.jsx'
import Logo from '@/components/ui/Logo.jsx'
import { CAMPUS_NAME } from '@/lib/config.js'
import { cn } from '@/lib/cn.js'
import SidebarNav from './SidebarNav.jsx'

function SidebarFooter() {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5">
      <p className="text-xs font-medium text-navy-200">{CAMPUS_NAME}</p>
      <p className="mt-1 text-xs text-navy-400">Early preview · not yet live</p>
    </div>
  )
}

export default function AppShell({ children }) {
  const [menuOpen, setMenuOpen] = useState(false)

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <div className="relative min-h-dvh overflow-x-clip">
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(60rem_40rem_at_80%_-10%,rgba(16,185,129,0.10),transparent_60%),radial-gradient(50rem_30rem_at_0%_0%,rgba(54,71,120,0.35),transparent_60%)]"
      />

      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 hidden w-64 flex-col border-r border-white/[0.06] bg-navy-950/70 px-4 py-6 backdrop-blur-xl lg:flex">
        <div className="px-2">
          <Logo />
        </div>
        <div className="mt-8 flex-1">
          <SidebarNav />
        </div>
        <SidebarFooter />
      </aside>

      {/* Mobile top bar */}
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-white/[0.06] bg-navy-950/80 px-4 py-3 backdrop-blur-xl lg:hidden">
        <Logo />
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="grid size-10 place-items-center rounded-xl text-navy-200 hover:bg-white/[0.05] hover:text-white"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <Icon name="menu" />
        </button>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          'fixed inset-0 z-40 lg:hidden',
          menuOpen ? 'pointer-events-auto' : 'pointer-events-none',
        )}
      >
        <div
          className={cn(
            'absolute inset-0 bg-navy-950/70 backdrop-blur-sm transition-opacity duration-300',
            menuOpen ? 'opacity-100' : 'opacity-0',
          )}
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
        <aside
          id="mobile-menu"
          className={cn(
            'absolute inset-y-0 left-0 flex w-72 max-w-[85vw] flex-col border-r border-white/[0.06] bg-navy-950 px-4 py-5 transition-transform duration-300 ease-out',
            menuOpen ? 'translate-x-0' : '-translate-x-full',
          )}
          inert={!menuOpen}
        >
          <div className="flex items-center justify-between px-2">
            <Logo />
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="grid size-9 place-items-center rounded-lg text-navy-300 hover:bg-white/[0.05] hover:text-white"
              aria-label="Close menu"
            >
              <Icon name="close" />
            </button>
          </div>
          <div className="mt-8 flex-1">
            <SidebarNav />
          </div>
          <SidebarFooter />
        </aside>
      </div>

      <main className="lg:pl-64">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-10 lg:py-12">{children}</div>
      </main>
    </div>
  )
}
