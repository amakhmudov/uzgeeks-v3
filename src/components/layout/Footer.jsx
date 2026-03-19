export function Footer() {
  return (
    <footer>
      <hr className="border-0 bg-divider h-px" />
      <div className="container py-[112px] flex items-start justify-between text-[16px] leading-[1.5] tracking-[0.32px]">
        <p className="text-body">© Copyright, All Rights Reserved by UzGeeks.</p>
        <div className="flex gap-8">
          <a href="#" className="text-brand underline">Terms</a>
          <a href="#" className="text-brand underline">Privacy policy</a>
        </div>
      </div>
    </footer>
  )
}
