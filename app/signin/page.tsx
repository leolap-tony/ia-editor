import Header from '@/components/Header'
import React from 'react'
import SignIn from './_components/SignIn'

function page() {
  return (
    <>
      <Header />
      <main className='flex flex-col justify-end items-center'>
        <SignIn />
      </main>
    </>
  )
}

export default page