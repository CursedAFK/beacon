import prisma from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (
  request: NextRequest,
  { params }: { params: { fullName: string } }
) => {
  if (!params.fullName) {
    return NextResponse.json({ message: 'Missing fullName' }, { status: 401 })
  }

  const user = await prisma.user.findUnique({
    where: {
      fullName: params.fullName
    },
    select: {
      fullName: true
    }
  })

  if (!user) {
    return NextResponse.json({ message: 'Unauthorized User' }, { status: 401 })
  }

  return NextResponse.json(user)
}
