import Header from '@/components/Header'
import React from 'react'
import SideBar from './_components/SideBar'
import { Button } from '@/components/ui/button'
import NewDocumentButton from './_components/NewDocumentButton'
import DocumentGrid from './_components/DocumentGrid'
import { createClient } from '@/utils/supabase/server'

async function page() {
  const supabase = await createClient()
  const { data } = await supabase.from('document').select()
  return (
    <>
      <Header/>
      <div className='flex'>
        <SideBar/>
        <main className='grow flex flex-col gap-6 p-6 bg-slate-100'>
          <div className='flex flex-row justify-between items-center w-full'>
            <h1 className='text-2xl font-semibold'>그룹명</h1>
            {/* <Button variant={'destructive'}>+새도큐먼트 만들기</Button> */}
            <NewDocumentButton/>
          </div>
          <DocumentGrid data={data}/>
        </main>
      </div>
    </>
  )
}

export default page