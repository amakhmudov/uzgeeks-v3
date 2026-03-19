import Link from "next/link";
import Image from "next/image";
import imgLogo from "@/assets/images/logo.svg";
import { Button } from "@/components/ui/Button";

type HeaderProps = {
  transparent?: boolean;
};

export function Header({ transparent = false }: HeaderProps) {
  const textColor = transparent ? "text-white" : "text-body";

  return (
    <header
      className={`flex items-center justify-between h-16 shrink-0 pt-3 ${textColor}`}
    >
      <div className="flex items-center gap-16">
        <Link href="/" className="block">
          <Image src={imgLogo} alt="UzGeeks" className="h-16 w-auto" />
        </Link>
        <nav className="text-[--font-size-base] leading-normal tracking-[--tracking-wide]">
          <ul className="flex gap-[--gap-nav] list-none">
            <li>
              <Link
                href="/events"
                className="capitalize hover:text-brand transition-colors"
              >
                Tadbirlar
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-brand transition-colors"
              >
                UzGeeks haqida
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-brand transition-colors">
                Yordam.uz
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center gap-5 text-[--font-size-base] leading-normal tracking-[--tracking-wide]">
        <a href="#" className="capitalize hover:text-brand transition-colors">
          Kirish
        </a>
        <span className="opacity-50" aria-hidden="true">
          /
        </span>
        <Button variant="primary">Ro&apos;yhattan o&apos;tish</Button>
      </div>
    </header>
  );
}
