import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function combineCSSClasses(...inputs) {
  return twMerge(clsx(inputs));
}
