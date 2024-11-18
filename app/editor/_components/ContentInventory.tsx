'use client'

import React from 'react'
import {useDocumentStore} from '@/store/documentStore'

function ContentInventory() {
  const { count, inc } = useDocumentStore()
  return (
    <div>
      contentInventory
      {count}
    </div>
  )
}

export default ContentInventory