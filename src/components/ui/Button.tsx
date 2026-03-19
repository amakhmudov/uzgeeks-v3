import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "outline";

type ButtonProps = {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const baseClasses =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand text-white px-8 py-4 rounded-[--radius-sm] text-[--font-size-base] hover:opacity-90 transition-opacity focus-visible:ring-brand",
  outline:
    "border border-white text-white px-8 py-[--spacing-btn-y] rounded-[--radius-sm] text-[--font-size-base] hover:bg-white/10 transition-colors focus-visible:ring-white",
};

export function Button({
  variant = "primary",
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      type="button"
      className={cn(baseClasses, variantClasses[variant], className)}
      {...rest}
    >
      {children}
    </button>
  );
}
