// Navigation items for the app shell. Only "Overview" exists today; the rest
// are shown as upcoming so the structure is visible without pretending to work.
export const NAV_ITEMS = [
  { id: 'overview', label: 'Overview', icon: 'home', available: true },
  { id: 'report', label: 'Report an issue', icon: 'plus', available: false },
  { id: 'issues', label: 'Issues', icon: 'list', available: false },
  { id: 'analytics', label: 'Analytics', icon: 'chart', available: false },
  { id: 'settings', label: 'Settings', icon: 'settings', available: false },
]
