import { cookies } from 'next/headers'

export default function cookieStore() {
  return cookies()
}
