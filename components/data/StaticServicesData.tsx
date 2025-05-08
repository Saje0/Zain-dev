import {
  Code,
  Layers,
  Layout,
  Smartphone,
  Store,
  TrendingUp,
} from 'lucide-react'

export const services = [
  {
    id: 1,
    title: 'تصميم المواقع',
    description:
      'تصميم مواقع ويب احترافية متجاوبة مع جميع الأجهزة بأحدث التقنيات',
    icon: <Layout className='h-10 w-10 text-primary' />,
  },
  {
    id: 2,
    title: 'تطوير التطبيقات',
    description: 'تطوير تطبيقات متقدمة للأجهزة الذكية على نظامي iOS و Android',
    icon: <Smartphone className='h-10 w-10 text-primary' />,
  },
  {
    id: 3,
    title: 'المتاجر الإلكترونية',
    description:
      'إنشاء متاجر إلكترونية احترافية مع نظام دفع آمن وإدارة المنتجات',
    icon: <Store className='h-10 w-10 text-primary' />,
  },
  {
    id: 4,
    title: 'خدمات البرمجة',
    description:
      'حلول برمجية مخصصة وتطوير أنظمة متكاملة بأحدث لغات البرمجة والتقنيات',
    icon: <Code className='h-10 w-10 text-primary' />,
  },
  {
    id: 5,
    title: 'تحسين محركات البحث',
    description: 'خدمات SEO لتحسين ظهور موقعك في محركات البحث وزيادة الزيارات',
    icon: <TrendingUp className='h-10 w-10 text-primary' />,
  },
  {
    id: 6,
    title: 'الهوية البصرية',
    description:
      'تصميم هويات بصرية كاملة تعكس قيم علامتك التجارية وتميزها عن المنافسين',
    icon: <Layers className='h-10 w-10 text-primary' />,
  },
]
