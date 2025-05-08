import { Award, CheckCircle2, Clock, Users } from 'lucide-react'
export const reasons = [
  {
    id: 1,
    title: 'فريق محترف',
    description: 'نملك فريق من المطورين والمصممين ذوي الخبرة العالية',
    icon: <Users className='h-8 w-8 text-primary' />,
  },
  {
    id: 2,
    title: 'جودة عالية',
    description:
      'نقدم خدمات بجودة عالية تلبي احتياجات عملائنا وتتجاوز توقعاتهم',
    icon: <Award className='h-8 w-8 text-primary' />,
  },
  {
    id: 3,
    title: 'سرعة التنفيذ',
    description: 'نلتزم بجداول زمنية محددة لإنجاز المشاريع بأسرع وقت ممكن',
    icon: <Clock className='h-8 w-8 text-primary' />,
  },
  {
    id: 4,
    title: 'دعم مستمر',
    description:
      'نوفر خدمات الدعم الفني المستمر لجميع مشاريعنا على مدار الساعة',
    icon: <CheckCircle2 className='h-8 w-8 text-primary' />,
  },
]
