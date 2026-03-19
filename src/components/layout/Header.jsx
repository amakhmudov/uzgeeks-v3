import PropTypes from 'prop-types'
import { imgLogo } from '@/assets'
import { Button } from '@/components/ui/Button'

export function Header({ transparent = false }) {
  const textColor = transparent ? 'text-white' : 'text-body'

  return (
    <header className={`flex items-center justify-between h-16 shrink-0 pt-3 ${textColor}`}>
      <div className="flex items-center gap-16">
        <img src={imgLogo} alt="UzGeeks" className="h-16 w-auto" />
        <nav className="flex gap-[108px] text-[18px] leading-normal tracking-[0.36px]">
          <a href="#tadbirlar" className="capitalize hover:text-brand transition-colors">Tadbirlar</a>
          <a href="#haqida" className="hover:text-brand transition-colors">UzGeeks haqida</a>
          <a href="#yordam" className="hover:text-brand transition-colors">Yordam.uz</a>
        </nav>
      </div>
      <div className="flex items-center gap-5 text-[18px] leading-normal tracking-[0.36px]">
        <a href="#kirish" className="capitalize hover:text-brand transition-colors">Kirish</a>
        <span className="opacity-50">/</span>
        <Button variant="primary">Ro'yhattan o'tish</Button>
      </div>
    </header>
  )
}

Header.propTypes = {
  transparent: PropTypes.bool,
}
