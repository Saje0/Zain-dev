import { MapPin, Phone, Mail, Building2 } from 'lucide-react'

export const contactInfo = [
  {
    title: 'العنوان',
    icon: <MapPin className='h-6 w-6 text-primary' />,
    details: ['المملكة العربية السعودية، الرياض، شارع العليا، برج الفيصلية'],
  },
  {
    title: 'رقم الهاتف',
    icon: <Phone className='h-6 w-6 text-primary' />,
    details: ['+966 12 345 6789', '+966 12 987 6543'],
  },
  {
    title: 'البريد الإلكتروني',
    icon: <Mail className='h-6 w-6 text-primary' />,
    details: ['info@zaindev.com.sa', 'support@zaindev.com.sa'],
  },
  {
    title: 'ساعات العمل',
    icon: <Building2 className='h-6 w-6 text-primary' />,
    details: ['الأحد - الخميس: 9:00 ص - 6:00 م', 'الجمعة - السبت: مغلق'],
  },
]
