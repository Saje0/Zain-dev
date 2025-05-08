'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { contactInfo } from '@/components/data/StaticContactInfo'
import { contactSchema, ContactFormData } from '@/schemas/contactSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

export default function Contact() {
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    // Fake API Simulating
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: 'تم إرسال رسالتك',
      description: 'سنقوم بالرد عليك في أقرب وقت ممكن.',
    })
    reset()
  }

  return (
    <section id='contact' className='py-20'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-primary font-bold text-lg mb-2'>تواصل معنا</h2>
          <h3 className='text-3xl md:text-4xl font-bold mb-6'>
            نحن هنا لمساعدتك
          </h3>
          <p className='text-gray-600 max-w-3xl mx-auto text-lg'>
            يمكنك التواصل معنا مباشرة عبر النموذج أدناه أو من خلال وسائل الاتصال
            المتاحة، وسنقوم بالرد عليك في أقرب وقت ممكن.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
          <div className='space-y-6'>
            {contactInfo.map((item, index) => (
              <Card
                key={index}
                className='border-2 border-gray-100 hover:border-primary/20 transition-all duration-300'
              >
                <CardContent className='p-6 flex items-start space-x-4 space-x-reverse'>
                  <div className='bg-primary/10 p-3 rounded-full mt-1'>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className='text-xl font-bold mb-1'>{item.title}</h4>
                    {item.details.map((line, i) => (
                      <p className='text-gray-600 text-sm' key={i}>
                        {line}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className='lg:col-span-2'>
            <Card className='border-0 shadow-lg'>
              <CardContent className='p-8'>
                <h4 className='text-2xl font-bold mb-6'>أرسل لنا رسالة</h4>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='space-y-2'>
                      <label htmlFor='name'>الاسم الكامل</label>
                      <Input
                        id='name'
                        placeholder='أدخل اسمك الكامل'
                        {...register('name')}
                      />
                    </div>
                    <div className='space-y-2'>
                      <label htmlFor='email'>البريد الإلكتروني</label>
                      <Input
                        id='email'
                        type='email'
                        placeholder='أدخل بريدك الإلكتروني'
                        {...register('email')}
                      />
                    </div>
                  </div>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='space-y-2'>
                      <label htmlFor='phone'>رقم الهاتف</label>
                      <Input
                        id='phone'
                        placeholder='أدخل رقم هاتفك'
                        {...register('phone')}
                      />
                    </div>
                    <div className='space-y-2'>
                      <label htmlFor='subject'>الموضوع</label>
                      <Input
                        id='subject'
                        placeholder='موضوع الرسالة'
                        {...register('subject')}
                      />
                    </div>
                  </div>
                  <div className='space-y-2'>
                    <label htmlFor='message'>الرسالة</label>
                    <Textarea
                      id='message'
                      rows={5}
                      placeholder='اكتب رسالتك هنا...'
                      {...register('message')}
                    />
                  </div>
                  <Button
                    type='submit'
                    disabled={isSubmitting}
                    className='bg-primary hover:bg-primary/90 text-white w-full md:w-auto px-8'
                  >
                    {isSubmitting ? 'جاري الإرسال...' : 'إرسال الرسالة'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
