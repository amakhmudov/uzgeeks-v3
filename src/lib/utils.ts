/**
 * Merges class names, filtering out falsy values
 * Simple utility for conditional className concatenation
 */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ')
}
