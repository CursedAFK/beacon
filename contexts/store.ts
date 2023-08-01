import { User } from '@prisma/client'
import { produce } from 'immer'
import { create } from 'zustand'

type GlobalStore = {
  user: User | undefined
  addUser: (user: User) => void
}

const useGlobalStore = create<GlobalStore>(set => ({
  user: undefined,
  addUser: (user: User) =>
    set(
      produce<GlobalStore>(store => {
        store.user = user
      })
    )
}))

export default useGlobalStore
