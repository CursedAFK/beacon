import { toast as toastify } from 'react-toastify'

type toastParams = {
  message: string
  type: 'success' | 'error'
}

const toast = ({ message, type }: toastParams) => toastify[type](message)

export default toast
