import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'

export default function About() {
  return (
    <section className='py-20 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <div>
            <h2 className='text-primary font-bold text-lg mb-2'>عن الشركة</h2>
            <h3 className='text-3xl md:text-4xl font-bold mb-6'>
              زين التنموية
            </h3>
            <p className='text-gray-600 mb-6 text-lg leading-relaxed'>
              شركة زين للتطوير هي شركة رائدة في مجال التقنية والتطوير الرقمي،
              تأسست بهدف تقديم حلول تقنية متكاملة تساعد الشركات والمؤسسات على
              النمو والتطور في العصر الرقمي.
            </p>
            <p className='text-gray-600 mb-8 text-lg leading-relaxed'>
              نحن نؤمن بأن التحول الرقمي هو مفتاح النجاح في عالم اليوم، ولذلك
              نسعى دائماً لتقديم أحدث الحلول التقنية وأكثرها فعالية لعملائنا.
            </p>
            <div className='flex flex-wrap gap-6 mb-8'>
              <div className='flex items-center'>
                <div className='w-16 h-16 bg-primary-light/10 rounded-lg flex items-center justify-center'>
                  <span className='text-2xl font-bold text-primary'>15+</span>
                </div>
                <div className='mr-4'>
                  <h4 className='text-lg font-semibold'>سنوات خبرة</h4>
                  <p className='text-gray-600'>في مجال التقنية</p>
                </div>
              </div>
              <div className='flex items-center'>
                <div className='w-16 h-16 bg-primary-light/10 rounded-lg flex items-center justify-center'>
                  <span className='text-2xl font-bold text-primary'>100%</span>
                </div>
                <div className='mr-4'>
                  <h4 className='text-lg font-semibold'>رضا العملاء</h4>
                  <p className='text-gray-600'>عملاء سعداء</p>
                </div>
              </div>
            </div>
            <Button className='bg-primary hover:bg-primary-light/90 text-white'>
              <span>اقرأ المزيد</span>
              <ArrowLeft className='mr-2 h-4 w-4' />
            </Button>
          </div>

          <div className='relative'>
            <div className='absolute -rotate-6 -top-2 -right-0 w-full h-full bg-primary-light/30 rounded-lg'></div>
            <div className='relative rounded-lg overflow-hidden shadow-xl'>
              <Image
                src='/images/about-us.jpg'
                alt='عن زين التنموية'
                width={600}
                height={400}
                className='w-full h-auto object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
