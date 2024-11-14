import React from 'react'
import TopPanel from '../_components/TopPanel'
import FlowCanvas from '../_components/FlowCanvas'
import SidePanel from '../_components/SidePanel'
import { createClient } from '@/utils/supabase/server'

async function page({ params }: { params: Promise<{ id: string }> }) {
  const supabase = await createClient()
  const { data } = await supabase.schema('editor').from('project_document').select()
  return (
    <div className='flex flex-col'>
      <div>{JSON.stringify(params)}</div>
      <div>{JSON.stringify(data)}</div>
      <TopPanel />
      <div className='flex'>
        <FlowCanvas />
        <SidePanel />
      </div>
    </div>
  )
}

export default page