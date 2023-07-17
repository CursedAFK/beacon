import { jwtVerify } from 'jose'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  const cookieToken = request.cookies.get(process.env.TOKEN_NAME)

  if (!cookieToken) {
    return NextResponse.redirect(new URL('/login?authType=LOGIN', request.url))
  }

  try {
    const { payload } = await jwtVerify(
      cookieToken.value,
      new TextEncoder().encode(process.env.JWT_SECRET)
    )

    return NextResponse.next()
  } catch (error) {
    return NextResponse.redirect(new URL('/login?authType=LOGIN', request.url))
  }
}

export const config = {
  matcher: ['/explore/:path*']
}
