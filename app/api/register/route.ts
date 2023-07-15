import prisma from '@/libs/prisma'
import { genSalt, hash } from 'bcrypt'
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

  const saltRounds = process.env.SALT_ROUNDS

  if (!saltRounds) {
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }

  const salt = await genSalt(+saltRounds)

  const hashedPassword = await hash(password, salt)

  try {
    const user = await prisma.user.create({
      data: {
        fullName,
        hashedPassword
      }
    })

    return NextResponse.json({ message: 'User created successfully', user })
  } catch (error) {
    console.log(error)

    return NextResponse.json(
      { message: 'Error creating user' },
      { status: 500 }
    )
  }
}
