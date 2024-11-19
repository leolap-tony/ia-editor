import React from 'react'

function SideBar() {
  return (
    <div className='min-h-screen w-[320px]'>
      <div className='p-4 border-b'>Leolap</div>
      <div className='flex flex-col gap-4 p-4 border-b'>
        <h2 className='font-bold'>즐겨찾기</h2>
        <p>프로젝트 도큐먼트</p>
        <p>프로젝트 도큐먼트</p>
      </div>
      <div className='flex flex-col gap-4 p-4 border-b'>
        <h2 className='font-bold'>그룹 목록</h2>
        <p>그룹명 </p>
        <p>그룹명 2</p>
      </div>
    </div>
  )
}

export default SideBar