import { Github, Youtube, Send, ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";

export function Footer() {
  return (
    <footer className="footer text-neutral-400">
      <section className="py-32 bg-white/5 border-b border-brand/20">
        <div className="container space-y-4">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-white">
              <strong>Yangiliklarga obuna bo'ling</strong>
            </h2>

            <p className="text-neutral-400">
              Yangi tadbirlar, spiker e'lonlari, IT hamjamiyat yangiliklaridan
              to'gridan-to'g'ri habardor bo'ling
            </p>
          </div>

          <form className="w-fit mx-auto media-info items-stretch">
            <input
              type="email"
              placeholder="Elektron pochta manzili"
              className="w-86 bg-white/10 placeholder:text-neutral-400 border border-white/20 rounded px-4 focus:outline-none focus:ring focus:ring-brand"
            />

            <Button variant="primary" className="media-info">
              Obuna bo'ling
              <ArrowRight size={18} />
            </Button>
          </form>
        </div>
      </section>

      <div className="container space-y-4 py-4">
        <div className="media-info justify-between">
          <p>
            ©&nbsp;Copyright&nbsp;2026. Barcha Huquqlar UzGeeks tomonidan
            himoyalangan.
          </p>

          <div className="media-info">
            <a
              href="#"
              className="size-9 hv-center hover:text-brand transition"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className="size-9 hv-center hover:text-brand transition"
              aria-label="YouTube"
            >
              <Youtube size={20} />
            </a>
            <a
              href="#"
              className=" size-9 hv-center hover:text-brand transition"
              aria-label="Telegram"
            >
              <Send size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
