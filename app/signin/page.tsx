import Header from '@/components/Header'
import React from 'react'
import SignIn from './_components/SignIn'

function page() {
  return (
    <>
      <Header />
      <main className='h-screen flex justify-center items-center'>
        <SignIn />
      </main>
    </>
  )
}

export default page