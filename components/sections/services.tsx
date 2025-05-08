'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { services } from '@/components/data/StaticServicesData'

export default function Services() {
  return (
    <section id='services' className='py-20 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16 fade-up'>
          <h2 className='text-primary font-bold text-lg mb-2'>خدماتنا</h2>
          <h3 className='text-3xl md:text-4xl font-bold mb-6'>
            نقدم مجموعة متكاملة من الخدمات التقنية
          </h3>
          <p className='text-gray-600 max-w-3xl mx-auto text-lg'>
            نوفر لك مجموعة متنوعة من الخدمات التقنية المتكاملة التي تساعدك على
            نمو أعمالك وتحقيق أهدافك الرقمية
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service) => (
            <div key={service.id}>
              <Card className='h-full border-2 border-gray-100 hover:border-primary/20 transition-all group'>
                <CardHeader className='pb-4'>
                  <div className='mb-4 bg-primary/10 p-4 rounded-full inline-block'>
                    {service.icon}
                  </div>
                  <CardTitle className='text-xl'>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className='text-base text-gray-600'>
                    {service.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button
                    variant='ghost'
                    className='text-primary group-hover:translate-x-[-5px] transition-transform'
                  >
                    <span>المزيد</span>
                    <ArrowLeft className='mr-2 h-4 w-4' />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
