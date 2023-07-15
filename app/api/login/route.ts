import { NextRequest, NextResponse } from 'next/server'

type RequestBody = {
  fullName: string
  password: string
}

export async function POST(request: NextRequest) {
  const { fullName, password }: RequestBody = await request.json()

  if (!fullName || !password) {
    return NextResponse.json({ message: 'Missing data' }, { status: 400 })
  }

  return NextResponse.json({
    message: 'Login Successful',
    user: { fullName, password }
  })
}
