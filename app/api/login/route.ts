import cookieStore from '@/utils/cookieStore'
import { NextResponse } from 'next/server'

export async function GET() {
  cookieStore().set({ name: 'Auth', value: 'John' })

  return NextResponse.json({ message: 'Cookies Set' })
}
