import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <header className='flex flex-row px-3 py-4 items-center h-[44px] border-b'>
      <Image width={100} height={20} alt='logo' src='logo.svg'/> 
    </header>
  )
}

export default Header