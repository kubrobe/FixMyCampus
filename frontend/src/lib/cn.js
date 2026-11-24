// Tiny helper to join conditional class names without an extra dependency.
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}
