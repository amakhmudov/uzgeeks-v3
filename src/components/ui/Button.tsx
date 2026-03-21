import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "outline";

type ButtonProps = {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const baseClasses = "rounded cursor-pointer leading-none h-12 transition";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-brand border border-brand text-white px-4 hover:bg-brand/80",
  outline: "border text-body px-4 hover:bg-white/10",
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
