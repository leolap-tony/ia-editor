import React from 'react'
import ContentInventory from './ContentInventory'
import ObjectInventory from './ObjectInventory'
import FeatureInventory from './FeatureInventory'

function SidePanel() {
  return (
    <div className='w-[320px] flex flex-col'>
      <ContentInventory/>
      <ObjectInventory/>
      <FeatureInventory/>
    </div>
  )
}

export default SidePanel