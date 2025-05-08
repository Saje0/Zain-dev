'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, Phone, ShoppingCart, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'الرئيسية', href: '#hero' },
  { name: 'خدماتنا', href: '#services' },
  { name: 'لماذا نحن', href: '#why-us' },
  { name: 'فروعنا', href: '#branches' },
  { name: 'شركاؤنا', href: '#partners' },
  { name: 'مشاريعنا', href: '#projects' },
  { name: 'تواصل معنا', href: '#contact' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          'fixed w-full z-50 transition-all duration-300 py-4',
          isScrolled
            ? 'bg-white/95 backdrop-blur-sm shadow-md py-2'
            : 'bg-transparent'
        )}
      >
        <div className='container mx-auto px-4 flex justify-between items-center'>
          <Link
            href='/'
            className='relative h-14 w-40 flex items-center justify-center gap-2'
          >
            <Image
              src='/images/logoZain.jpg'
              alt='زين للتطوير'
              width={25}
              height={25}
              className='object-contain'
              priority
            />
            <span className='font-bold text-2xl'>زين التنموية</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-1 space-x-reverse'>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'px-3 py-2 text-base font-medium rounded-md transition hover:text-primary',
                  isScrolled ? 'text-gray-800' : 'text-gray-500'
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button className='mr-4 bg-primary hover:bg-primary/90 text-white rounded-full'>
              <ShoppingCart className='ml-2 h-5 w-5' />
              <span>تسوق الآن</span>
            </Button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className='flex items-center md:hidden'>
            <Button
              variant='ghost'
              size='icon'
              className='text-gray-800'
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className='h-7 w-7' />
            </Button>
          </div>
        </div>
      </header>

      {/* Animated Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 z-[100] bg-white flex flex-col transition-transform duration-300 ease-in-out',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full',
          'transform'
        )}
        style={{ visibility: isMenuOpen ? 'visible' : 'hidden' }}
      >
        <div className='container mx-auto px-4 py-5 flex justify-between items-center'>
          <Link href='#hero' className='relative h-14 w-40'>
            <Image
              src='/images/logoZain.jpg'
              alt='زين للتطوير'
              width={25}
              height={25}
              className='object-contain'
            />
          </Link>
          <Button
            variant='ghost'
            size='icon'
            className='text-black'
            onClick={() => setIsMenuOpen(false)}
          >
            <X className='h-7 w-7' />
          </Button>
        </div>

        <div className='flex flex-col items-center justify-center flex-grow'>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className='px-3 py-4 text-xl font-medium text-black hover:text-primary transition'
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Button className='mt-6 bg-primary text-white hover:bg-primary/90 rounded-full'>
            <ShoppingCart className='ml-2 h-5 w-5' />
            <span>تسوق الآن</span>
          </Button>
        </div>

        <div className='container mx-auto px-4 py-6'>
          <div className='flex justify-center space-x-4 space-x-reverse'>
            <Button
              variant='outline'
              size='icon'
              className='rounded-full border-black text-black hover:bg-black/5'
            >
              <Phone className='h-5 w-5' />
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
