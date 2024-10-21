"use client"
import { SessionProvider } from 'next-auth/react'
import React from 'react'

export default function Providers({children}) {
  return (
    <div>
      <SessionProvider>
        {children}
      </SessionProvider>
    </div>
  )
}
