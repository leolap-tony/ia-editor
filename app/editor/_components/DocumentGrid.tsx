import Link from 'next/link'
import React from 'react'

function DocumentGrid({data}:{data:any}) {
  return (
    <div className='grid grid-cols-4 gap-6'>
      {data.map((document:any)=>(
        <Link key={document.id} href={`/editor/${document.id}`}>
          <div className='h-[160px] border rounded-lg p-4 bg-white'>
            {document.name}
          </div>        
        </Link>
      ))}
    </div>
  )
}

export default DocumentGrid