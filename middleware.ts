import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  const cookies = request.cookies

  const auth = cookies.get('Auth')

  if (!auth) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*']
}
