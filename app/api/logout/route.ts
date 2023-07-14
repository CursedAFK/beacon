import cookieStore from '@/utils/cookieStore'
import { NextResponse } from 'next/server'

export async function GET() {
  cookieStore().delete('Auth')

  return NextResponse.json({ message: 'Logged out Successfully' })
}
