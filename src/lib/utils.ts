import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function cx(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function focusRing(...inputs: ClassValue[]) {
  return cn(
    "outline-none ring-2 ring-transparent ring-offset-2 ring-offset-background",
    "focus-visible:ring-ring",
    "transition-shadow",
    ...inputs
  )
}