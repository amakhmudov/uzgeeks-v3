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
    <header className="header">
      <div className={`container ${textColor}`}>
        <div className="media-info gap-x-8">
          <Link href="/" className="block">
            <Image src={imgLogo} alt="UzGeeks" className="h-12 w-auto" />
          </Link>

          <nav>
            <ul className="media-info gap-x-4">
              <li>
                <Link href="/events" className="hover:text-brand transition">
                  Tadbirlar
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand transition">
                  UzGeeks haqida
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-brand transition">
                  Yordam.uz
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <ul className="media-info gap-x-4">
          <a href="#" className="hover:text-brand transition">
            Kirish
          </a>
          <span className="opacity-50" aria-hidden="true">
            /
          </span>
          <Button variant="primary">Ro&apos;yhattan o&apos;tish</Button>
        </ul>
      </div>
    </header>
  );
}
