import { z } from 'zod'

export default z.object({
  fullName: z.string().min(3).max(20),
  password: z.string().min(6).max(20)
})
