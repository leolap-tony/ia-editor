'use client'

import React from 'react'
import {useDocumentStore} from '@/store/documentStore'

function ObjectInventory() {
  const { count, inc } = useDocumentStore()
  return (
    <div>ObjectInventory
      {count}
      <button onClick={inc}>inc</button>
    </div>
  )
}

export default ObjectInventory