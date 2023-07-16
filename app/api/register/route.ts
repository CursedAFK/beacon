import prisma from '@/lib/prisma'
import userCredentialsSchema from '@/schemas/UserCredentials.schema'
import { Prisma } from '@prisma/client'
import { hash } from 'bcrypt'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const isUserCredentialsValid = userCredentialsSchema.safeParse(
    await request.json()
  )

  if (!isUserCredentialsValid.success) {
    return NextResponse.json(
      {
        message: 'Invalid user credentials'
      },
      { status: 400 }
    )
  }

  const hashedPassword = await hash(
    isUserCredentialsValid.data.password,
    +process.env.SALT_ROUNDS
  )

  try {
    const user = await prisma.user.create({
      data: {
        fullName: isUserCredentialsValid.data.fullName,
        hashedPassword
      },
      select: {
        fullName: true,
        role: true
      }
    })

    return NextResponse.json({ message: 'User created successfully', user })
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        return NextResponse.json(
          { message: 'User already exists' },
          { status: 400 }
        )
      }
    }

    return NextResponse.json(
      { message: 'Error creating user' },
      { status: 500 }
    )
  }
}
