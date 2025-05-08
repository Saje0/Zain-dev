import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa'
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md'

export default function Footer() {
  return (
    <footer className='bg-gray-900 text-white'>
      <div className='container mx-auto px-4 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
          {/* Column 1 - About */}
          <div className='space-y-4'>
            <div className='mb-6 flex items-center gap-2'>
              <Image
                src='/images/logoZain.jpg'
                alt='زين للتطوير'
                height={25}
                width={25}
                className='object-contain'
              />
              <span className='font-bold text-primary text-2xl'>
                زين التنموية
              </span>
            </div>
            <p className='text-gray-300 leading-relaxed'>
              شركة زين للتطوير هي شركة رائدة في مجال الخدمات التقنية والتطوير
              الرقمي، تهدف لتقديم حلول متكاملة للشركات والأفراد.
            </p>
            <div className='flex space-x-3 space-x-reverse pt-2'>
              <Link
                href='#'
                className='bg-white/10 p-2 rounded-full hover:bg-primary transition-colors'
              >
                <FaFacebookF className='h-5 w-5' />
              </Link>
              <Link
                href='#'
                className='bg-white/10 p-2 rounded-full hover:bg-primary transition-colors'
              >
                <FaTwitter className='h-5 w-5' />
              </Link>
              <Link
                href='#'
                className='bg-white/10 p-2 rounded-full hover:bg-primary transition-colors'
              >
                <FaInstagram className='h-5 w-5' />
              </Link>
              <Link
                href='#'
                className='bg-white/10 p-2 rounded-full hover:bg-primary transition-colors'
              >
                <FaLinkedinIn className='h-5 w-5' />
              </Link>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className='space-y-4'>
            <h3 className="text-xl font-bold mb-6 relative after:content-[''] after:absolute after:right-0 after:bottom-[-10px] after:w-16 after:h-1 after:bg-primary">
              روابط مهمة
            </h3>
            <ul className='space-y-3'>
              <li>
                <Link
                  href='#services'
                  className='text-gray-300 hover:text-primary transition-colors'
                >
                  خدماتنا
                </Link>
              </li>
              <li>
                <Link
                  href='#why-us'
                  className='text-gray-300 hover:text-primary transition-colors'
                >
                  لماذا نحن
                </Link>
              </li>
              <li>
                <Link
                  href='#projects'
                  className='text-gray-300 hover:text-primary transition-colors'
                >
                  المشاريع
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-gray-300 hover:text-primary transition-colors'
                >
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-gray-300 hover:text-primary transition-colors'
                >
                  الشروط والأحكام
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div className='space-y-4'>
            <h3 className="text-xl font-bold mb-6 relative after:content-[''] after:absolute after:right-0 after:bottom-[-10px] after:w-16 after:h-1 after:bg-primary">
              تواصل معنا
            </h3>
            <ul className='space-y-4'>
              <li className='flex items-start space-x-3 space-x-reverse'>
                <MdLocationOn className='h-5 w-5 text-primary mt-1' />
                <span className='text-gray-300'>
                  المملكة العربية السعودية، الرياض، شارع العليا، برج الفيصلية
                </span>
              </li>
              <li className='flex items-center space-x-3 space-x-reverse'>
                <MdPhone className='h-5 w-5 text-primary' />
                <span className='text-gray-300'>+966 12 345 6789</span>
              </li>
              <li className='flex items-center space-x-3 space-x-reverse'>
                <MdEmail className='h-5 w-5 text-primary' />
                <span className='text-gray-300'>info@zaindev.com.sa</span>
              </li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div className='space-y-4'>
            <h3 className="text-xl font-bold mb-6 relative after:content-[''] after:absolute after:right-0 after:bottom-[-10px] after:w-16 after:h-1 after:bg-primary">
              النشرة البريدية
            </h3>
            <p className='text-gray-300 leading-relaxed'>
              اشترك في نشرتنا البريدية للحصول على آخر العروض والتحديثات.
            </p>
            <div className='flex flex-col space-y-3'>
              <Input
                type='email'
                placeholder='البريد الإلكتروني'
                className='bg-white/10 border-gray-700 text-white placeholder:text-gray-400 focus:border-primary'
              />
              <Button className='bg-primary hover:bg-primary/90 text-white w-full'>
                اشتراك
              </Button>
            </div>
          </div>
        </div>

        <div className='border-t border-gray-800 mt-16 pt-8 text-center'>
          <p className='text-gray-400'>
            زين التنموية | جميع الحقوق محفوظة {new Date().getFullYear()}©.
          </p>
        </div>
      </div>
    </footer>
  )
}
