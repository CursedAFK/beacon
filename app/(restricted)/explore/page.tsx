'use client'

import { User } from '@prisma/client'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'

const Explore = () => {
  const [fullName, setFullName] = useState('')
  const [user, setUser] = useState<User>()
  const [isLoading, setIsLoading] = useState(true)

  const getUser = async (fullName: string) => {
    try {
      setIsLoading(true)

      const response = await fetch(`/api/user/${fullName}`)

      const data: User = await response.json()

      setUser(data)
    } catch (error) {
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    setFullName(Cookies.get('fullName') || '')
  }, [])

  useEffect(() => {
    if (!fullName) return

    getUser(fullName)
  }, [fullName])

  if (isLoading) return <p>Loading...</p>

  if (!user) return <p>User not found</p>

  return (
    <div>
      <h2>Explore Page</h2>

      <p>Welcome {user.fullName}</p>
    </div>
  )
}

export default Explore
