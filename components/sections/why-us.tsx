import Image from 'next/image'
import { reasons } from '@/components/data/StaticWhyUsData'

export default function WhyUs() {
  return (
    <section id='why-us' className='py-20 bg-[#090930]'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <div className='rounded-lg overflow-hidden'>
            <Image
              src='/images/whyus.jpg'
              alt='لماذا زين للتطوير'
              width={600}
              height={700}
              className='w-full h-auto object-cover'
            />
          </div>

          <div>
            <h2 className='text-primary font-bold text-lg mb-2'>لماذا نحن</h2>
            <h3 className='text-3xl md:text-4xl font-bold mb-6 text-white'>
              لماذا تختار زين للتطوير؟
            </h3>
            <p className='text-gray-400 mb-10 text-lg leading-relaxed'>
              تتميز زين للتطوير بخبرة واسعة في مجال التقنية والتطوير، وتلتزم
              بتقديم حلول مبتكرة وخدمات متميزة تلبي احتياجات عملائنا وتساعدهم
              على تحقيق أهدافهم.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              {reasons.map((reason) => (
                <div key={reason.id} className='flex space-x-4 space-x-reverse'>
                  <div className='mt-1'>{reason.icon}</div>
                  <div>
                    <h4 className='text-xl font-bold mb-2 text-white'>
                      {reason.title}
                    </h4>
                    <p className='text-gray-400'>{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-12'>
              <div className='text-center'>
                <h5 className='text-3xl md:text-4xl font-bold text-primary'>
                  +500
                </h5>
                <p className='text-white mt-2'>عميل سعيد</p>
              </div>
              <div className='text-center'>
                <h5 className='text-3xl md:text-4xl font-bold text-primary'>
                  +850
                </h5>
                <p className='text-white mt-2'>مشروع منجز</p>
              </div>
              <div className='text-center'>
                <h5 className='text-3xl md:text-4xl font-bold text-primary'>
                  +15
                </h5>
                <p className='text-white mt-2'>سنة خبرة</p>
              </div>
              <div className='text-center'>
                <h5 className='text-3xl md:text-4xl font-bold text-primary'>
                  +50
                </h5>
                <p className='text-white mt-2'>موظف محترف</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
