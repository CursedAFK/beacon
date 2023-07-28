import { jwtVerify } from 'jose'
import { NextRequest, NextResponse } from 'next/server'

export const middleware = async (request: NextRequest) => {
  const cookieToken = request.cookies.get(process.env.NEXT_PUBLIC_TOKEN_NAME!)

  if (!cookieToken) {
    return NextResponse.redirect(new URL('/auth', request.url))
  }

  try {
    const { payload } = await jwtVerify(
      cookieToken.value,
      new TextEncoder().encode(process.env.JWT_SECRET!)
    )

    return NextResponse.next()
  } catch (error) {
    return NextResponse.redirect(new URL('/auth', request.url))
  }
}

export const config = {
  matcher: ['/explore/:path*']
}
