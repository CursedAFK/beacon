import { jwtVerify } from 'jose'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  const { searchParams } = new URL(request.url)

  const token = searchParams.get(process.env.TOKEN_NAME)

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET)
    )
    return NextResponse.next()
  } catch (error) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

export const config = {
  matcher: ['/explore/:path*']
}
