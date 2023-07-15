import { NextRequest } from 'next/server'

type RequestBody = {
  fullName: string
  password: string
}

export async function POST(request: NextRequest) {}
