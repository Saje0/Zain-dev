import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2, 'الاسم مطلوب'),
  email: z.string().email('بريد إلكتروني غير صالح'),
  phone: z.string().optional(),
  subject: z.string().min(2, 'الموضوع مطلوب'),
  message: z.string().min(5, 'الرسالة مطلوبة'),
})

export type ContactFormData = z.infer<typeof contactSchema>
