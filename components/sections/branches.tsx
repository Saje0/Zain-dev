'use client'

import { useEffect, useRef, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TabsContent, Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Building, MapPin, Phone, Clock } from 'lucide-react'
import { branches } from '@/components/data/StaticBranchesData'

export default function Branches() {
  const [activeTab, setActiveTab] = useState('riyadh')
  const mapRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    if (mapRef.current) {
      const currentSrc = mapRef.current.src
      mapRef.current.src = ''
      setTimeout(() => {
        if (mapRef.current) mapRef.current.src = currentSrc
      }, 10)
    }
  }, [activeTab])

  return (
    <section id='branches' className='py-20 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-primary font-bold text-lg mb-2'>فروعنا</h2>
          <h3 className='text-3xl md:text-4xl font-bold mb-6'>
            تواجدنا في المملكة
          </h3>
          <p className='text-gray-600 max-w-3xl mx-auto text-lg'>
            نتواجد في عدة مدن رئيسية في المملكة العربية السعودية لنكون بالقرب من
            عملائنا ونقدم لهم أفضل الخدمات
          </p>
        </div>

        <Tabs
          defaultValue='riyadh'
          onValueChange={setActiveTab}
          className='w-full'
        >
          <TabsList className='grid grid-cols-3 mb-8 w-full h-full max-w-lg mx-auto'>
            {branches.map((branch) => (
              <TabsTrigger
                key={branch.id}
                value={branch.id}
                className='text-lg py-2'
              >
                {branch.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {branches.map((branch) => (
            <TabsContent
              key={branch.id}
              value={branch.id}
              className='rounded-lg overflow-hidden'
            >
              <div className='grid grid-cols-1 lg:grid-cols-5 gap-8'>
                <Card className='lg:col-span-2 border-2 border-gray-100'>
                  <CardHeader>
                    <div className='flex justify-between items-center'>
                      <CardTitle className='text-2xl font-bold'>
                        {branch.name}
                      </CardTitle>
                      <Building className='h-6 w-6 text-primary' />
                    </div>
                  </CardHeader>
                  <CardContent className='space-y-4'>
                    <div className='flex items-center gap-2'>
                      <MapPin className='h-5 w-5 text-primary mt-1' />
                      <div>
                        <h4 className='font-medium'>العنوان</h4>
                        <p className='text-gray-600'>{branch.address}</p>
                      </div>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Phone className='h-5 w-5 text-primary mt-1' />
                      <div>
                        <h4 className='font-medium'>رقم الهاتف</h4>
                        <p className='text-gray-600'>{branch.phone}</p>
                      </div>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Clock className='h-5 w-5 text-primary mt-1' />
                      <div>
                        <h4 className='font-medium'>ساعات العمل</h4>
                        <p className='text-gray-600'>{branch.hours}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className='lg:col-span-3 relative overflow-hidden rounded-lg h-[300px] md:h-[400px] shadow-lg'>
                  <iframe
                    ref={mapRef}
                    src={branch.mapUrl}
                    width='100%'
                    height='100%'
                    style={{ border: 0 }}
                    allowFullScreen
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                    title={`خريطة فرع ${branch.name}`}
                  ></iframe>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
