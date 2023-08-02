import { User } from '@prisma/client'
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

type GlobalStore = {
  user: User | undefined
  addUser: (user: User) => void
}

const useGlobalStore = create(
  immer<GlobalStore>(set => ({
    user: undefined,
    addUser: (user: User) =>
      set(store => {
        store.user = user
      })
  }))
)

export default useGlobalStore
