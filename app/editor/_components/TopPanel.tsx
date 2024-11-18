import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function TopPanel() {
  return (
    <div>
      <div className='flex items-center px-4 py-3 border-b'>
        <Button variant={'ghost'} asChild><Link href={'/editor'}>{'<'}</Link></Button>
        <p>도큐먼트 제목</p>
      </div>
      <div className='flex gap-3 px-4 py-[10px] border-b'>
        <Button>정보구조도 뷰</Button>
        <Button variant={'outline'}>분석뷰 뷰</Button>
      </div>
    </div>
  )
}

export default TopPanel