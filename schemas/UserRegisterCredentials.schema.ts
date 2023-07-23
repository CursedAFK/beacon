import { z } from 'zod'

export default z.object({
  fullName: z
    .string()
    .min(3, { message: 'Name must be at least 3 characters long' })
    .max(20, { message: 'Name must be at most 20 characters long' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters long' })
    .max(20, { message: 'Password must be at most 20 characters long' }),
  confirmPassword: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters long' })
    .max(20, { message: 'Password must be at most 20 characters long' })
})
