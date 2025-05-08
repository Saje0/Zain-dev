import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ArrowLeft, Calendar, User } from 'lucide-react'
import Image from 'next/image'
import { articles } from '@/components/data/StaticNewsData'

export default function News() {
  return (
    <section className='py-20'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-primary font-bold text-lg mb-2'>المدونة</h2>
          <h3 className='text-3xl md:text-4xl font-bold mb-6'>
            آخر المقالات والأخبار
          </h3>
          <p className='text-gray-600 max-w-3xl mx-auto text-lg'>
            تابع آخر أخبار وتحديثات زين للتطوير، واطلع على أحدث المقالات في مجال
            التقنية والتطوير الرقمي
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {articles.map((article) => (
            <div key={article.id}>
              <Card className='h-full border-2 border-gray-100 hover:border-primary/20 transition-all'>
                <div className='relative h-48 w-full overflow-hidden'>
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className='object-cover transition-transform duration-300 hover:scale-105'
                  />
                </div>
                <CardHeader>
                  <CardTitle className='text-xl line-clamp-2'>
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-gray-600 line-clamp-3 mb-4'>
                    {article.excerpt}
                  </p>
                  <div className='flex items-center justify-between text-sm text-gray-500'>
                    <div className='flex items-center'>
                      <Calendar className='h-4 w-4 ml-1' />
                      <span>{article.date}</span>
                    </div>
                    <div className='flex items-center'>
                      <User className='h-4 w-4 ml-1' />
                      <span>{article.author}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant='ghost'
                    className='text-primary hover:text-primary/90'
                  >
                    <span>اقرأ المزيد</span>
                    <ArrowLeft className='mr-2 h-4 w-4' />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>

        <div className='text-center mt-12'>
          <Button className='bg-primary hover:bg-primary-light/90 text-white'>
            <span>جميع المقالات</span>
            <ArrowLeft className='mr-2 h-4 w-4' />
          </Button>
        </div>
      </div>
    </section>
  )
}
