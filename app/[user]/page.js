'use client'

import { useSession } from 'next-auth/react'

const User = () => {
  const { data: session, status } = useSession({required: true})
  return (
    <div className="h-screen w-full flex items-center justify-center">
      {status === 'authenticated' ? 
        <h1>Welcome {session.user.name}</h1>
      : <h1>You are not logged in</h1>}
    </div>
  )
}

export default User
