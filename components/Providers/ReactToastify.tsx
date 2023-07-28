'use client'

import { PropsWithChildren } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ReactToastify: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <ToastContainer />

      {children}
    </>
  )
}

export default ReactToastify
