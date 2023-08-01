'use client'

import Header from '@/components/Explore/Header'
import useGlobalStore from '@/contexts/store'
import { User } from '@prisma/client'
import Cookies from 'js-cookie'
import { PropsWithChildren, useCallback, useEffect, useState } from 'react'

const RestrictedLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const [fullName, setFullName] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const [user, addUser] = useGlobalStore(store => [store.user, store.addUser])

  const getUser = useCallback(
    async (fullName: string) => {
      try {
        setIsLoading(true)
        const response = await fetch(`/api/user/${fullName}`)
        const data: User = await response.json()
        addUser(data)
      } catch (error) {
      } finally {
        setIsLoading(false)
      }
    },
    [addUser]
  )

  useEffect(() => {
    setFullName(Cookies.get('fullName') || '')
  }, [])

  useEffect(() => {
    if (!fullName) return
    getUser(fullName)
  }, [fullName, getUser])

  if (isLoading) return <p>Loading...</p>

  if (!user) return <p>User not found</p>

  return (
    <>
      <Header user={user} />
      {children}
    </>
  )
}

export default RestrictedLayout
