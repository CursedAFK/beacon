'use client'

import useGlobalStore from '@/contexts/store'

const Explore = () => {
  const user = useGlobalStore(store => store.user)

  if (!user) return <p>User not found</p>

  return (
    <div>
      <h2>Explore Page</h2>
      <p>Welcome {user.fullName}</p>
    </div>
  )
}

export default Explore
