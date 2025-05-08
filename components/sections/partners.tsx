import Image from 'next/image'
import { partners } from '@/components/data/StaticPartnersData'

export default function Partners() {
  return (
    <section id='partners' className='py-20'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-primary font-bold text-lg mb-2'>شركاؤنا</h2>
          <h3 className='text-3xl md:text-4xl font-bold mb-6'>
            نفتخر بشراكتنا مع
          </h3>
          <p className='text-gray-600 max-w-3xl mx-auto text-lg'>
            نفتخر بالتعاون مع مجموعة من أهم الشركات العالمية والمحلية لتقديم
            أفضل الخدمات والحلول لعملائنا
          </p>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center'>
          {partners.map((partner) => (
            <div
              key={partner.id}
              className='flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-full h-32 p-6'
            >
              <div className='relative w-full h-full'>
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className='object-contain filter grayscale hover:grayscale-0 transition-all duration-300'
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
