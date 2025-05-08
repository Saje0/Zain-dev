'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { projects, categories } from '@/components/data/StaticProjectsData'

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [visibleProjects, setVisibleProjects] = useState(6)

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'all' || project.category === activeCategory
  )

  const loadMore = () => {
    setVisibleProjects((prev) => prev + 3)
  }

  return (
    <section id='projects' className='py-20 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-primary font-bold text-lg mb-2'>مشاريعنا</h2>
          <h3 className='text-3xl md:text-4xl font-bold mb-6'>
            أحدث المشاريع التي قمنا بتنفيذها
          </h3>
          <p className='text-gray-600 max-w-3xl mx-auto text-lg'>
            نفخر بتقديم مجموعة متنوعة من المشاريع المتميزة التي قمنا بتنفيذها
            لعملائنا في مختلف المجالات
          </p>
        </div>

        <Tabs
          defaultValue='all'
          onValueChange={setActiveCategory}
          className='w-full'
        >
          <TabsList className='grid grid-cols-2 h-full sm:grid-cols-3 md:grid-cols-5 mb-12 w-full'>
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className='text-base py-2'
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeCategory} className='mt-0'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {filteredProjects.slice(0, visibleProjects).map((project) => (
                <div key={project.id}>
                  <Card className='overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow group'>
                    <div className='relative h-64 w-full overflow-hidden'>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className='object-cover group-hover:scale-105 transition-transform duration-500'
                      />
                      <div className='absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                        <Button
                          asChild
                          variant='outline'
                          className='text-white border-white bg-white/20'
                        >
                          <a
                            href={project.url}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <span>عرض المشروع</span>
                            <ExternalLink className='mr-2 h-4 w-4' />
                          </a>
                        </Button>
                      </div>
                    </div>
                    <CardContent className='p-4'>
                      <h4 className='text-xl font-semibold mb-2'>
                        {project.title}
                      </h4>
                      <div className='flex justify-between items-center'>
                        <span className='text-gray-600 text-sm bg-gray-100 px-3 py-1 rounded-full'>
                          {
                            categories.find((c) => c.id === project.category)
                              ?.name
                          }
                        </span>
                        <Button
                          variant='ghost'
                          size='sm'
                          className='text-primary p-0 h-auto'
                        >
                          <span>التفاصيل</span>
                          <ArrowLeft className='mr-1 h-4 w-4' />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {filteredProjects.length > visibleProjects && (
              <div className='flex justify-center mt-12'>
                <Button
                  onClick={loadMore}
                  className='bg-primary hover:bg-primary/90 text-white'
                >
                  عرض المزيد
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
