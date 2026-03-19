import { Github, Youtube, Send } from 'lucide-react'

export function Footer() {
  return (
    <footer>
      <hr className="border-0 bg-divider h-px" />
      <div className="container py-[--spacing-section]">
        <div className="flex items-start justify-between text-[--font-size-sm] leading-[--line-height-normal] tracking-[--tracking-normal]">
          <div className="flex flex-col gap-6">
            <p className="text-body">© Copyright, All Rights Reserved by UzGeeks.</p>
            <div className="flex gap-4">
              <a href="#" className="text-body hover:text-brand transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="#" className="text-body hover:text-brand transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-body hover:text-brand transition-colors" aria-label="Telegram">
                <Send size={20} />
              </a>
            </div>
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-brand underline hover:no-underline transition-all">Terms</a>
            <a href="#" className="text-brand underline hover:no-underline transition-all">Privacy policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
