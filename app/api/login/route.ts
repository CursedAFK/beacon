import prisma from '@/lib/prisma'
import UserLoginCredentialsSchema from '@/schemas/UserLoginCredentials.schema'
import { compare } from 'bcrypt'
import { SignJWT } from 'jose'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const isUserCredentialsValid = UserLoginCredentialsSchema.safeParse(
    await request.json()
  )

  if (!isUserCredentialsValid.success) {
    return NextResponse.json(
      { message: 'Invalid credentials' },
      { status: 400 }
    )
  }

  const user = await prisma.user.findUnique({
    where: {
      fullName: isUserCredentialsValid.data.fullName
    }
  })

  if (!user) {
    return NextResponse.json({ message: 'User not found' }, { status: 404 })
  }

  const isPassWordCorrect = await compare(
    isUserCredentialsValid.data.password,
    user.hashedPassword
  )

  if (!isPassWordCorrect) {
    return NextResponse.json(
      { message: 'Invalid credentials' },
      { status: 400 }
    )
  }

  const { fullName, profileImage } = user

  const token = await new SignJWT({ fullName, profileImage })
    .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
    .setExpirationTime('20s')
    .sign(new TextEncoder().encode(process.env.JWT_SECRET!))

  return NextResponse.json({
    message: 'Login successful',
    user: { fullName, profileImage, accessToken: token }
  })
}
