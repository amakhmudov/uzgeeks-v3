import Image from 'next/image'
import imgPartners from '@/assets/images/partners.svg'

export function PartnersSection() {
  return (
    <section id="hamkorlar" className="py-[--spacing-section]">
      <div className="container">
        <div className="text-center">
          <h2 className="h1 text-brand">Hamkorlarimiz</h2>
          <p className="text-lead text-body mt-6">
            UzGeeks Community tarkibidagi mutahassislar quyidagi companiyalarda{" "}
            o&apos;z ish faoliyatlarini yuritadilar
          </p>
        </div>
        <div className="mt-[--spacing-section-lg] flex justify-center">
          <Image src={imgPartners} alt="Hamkorlar" className="max-w-full h-auto" />
        </div>
      </div>
    </section>
  )
}
