'use client'

import { motion } from '@/lib/framer-motion'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Star, CheckCircle2, Crown } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id='hero'
      className='relative min-h-screen pt-32 pb-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white'
    >
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-right'
          >
            <div className='inline-flex items-center bg-primary/10 rounded-full px-4 py-2 mb-6'>
              <Star className='h-5 w-5 text-primary ml-2' />
              <span className='text-primary font-semibold'>
                الشريك الأمثل لمشاريع المستقبل
              </span>
            </div>

            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6'>
              <span className='text-primary'>زين</span> التنموية
            </h1>
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>
              الشريك الأمثل لمشاريع المستقبل
            </h2>

            <p className='text-gray-600 text-lg mb-8 leading-relaxed'>
              شركة رائدة في مجال المقاولات والتطوير في المملكة العربية السعودية.
              نقدم التميز في خدمات المقاولات والصيانة والخدمات المتخصصة
            </p>

            <div className='flex flex-wrap gap-4 mb-12'>
              <div className='inline-flex items-center bg-white rounded-full px-4 py-2 shadow-sm'>
                <Crown className='h-5 w-5 text-primary ml-2' />
                <span className='text-gray-700'>
                  فريق من المهندسين المحترفين
                </span>
              </div>
              <div className='inline-flex items-center bg-white rounded-full px-4 py-2 shadow-sm'>
                <CheckCircle2 className='h-5 w-5 text-primary ml-2' />
                <span className='text-gray-700'>ضمان الجودة في كل مشروع</span>
              </div>
              <div className='inline-flex items-center bg-white rounded-full px-4 py-2 shadow-sm'>
                <Star className='h-5 w-5 text-primary ml-2' />
                <span className='text-gray-700'>خبرة أكثر من 15 عام</span>
              </div>
            </div>

            <div className='flex flex-wrap gap-4'>
              <Button
                size='lg'
                className='bg-primary hover:bg-primary/90 text-white rounded-full px-8'
              >
                مشاريعنا
              </Button>
              <Button size='lg' variant='outline' className='rounded-full px-8'>
                تواصل معنا
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='relative'
          >
            <div className='relative'>
              <div className='absolute -top-10 -right-10 w-72 h-72 bg-primary/5 rounded-full'></div>
              <div className='relative rounded-2xl overflow-hidden shadow-2xl'>
                <Image
                  src='/images/hero-1.avif'
                  alt='زين للتطوير'
                  width={600}
                  height={400}
                  className='w-full h-auto object-cover'
                />
              </div>
            </div>

            <div className='grid grid-cols-4 gap-6 mt-12'>
              <div className='text-center'>
                <div className='text-3xl font-bold text-primary'>100%</div>
                <div className='text-sm text-gray-600 mt-1'>رضا العملاء</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-primary'>+50</div>
                <div className='text-sm text-gray-600 mt-1'>شريك نجاح</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-primary'>+500</div>
                <div className='text-sm text-gray-600 mt-1'>مشروع منجز</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-primary'>+15</div>
                <div className='text-sm text-gray-600 mt-1'>سنوات خبرة</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
