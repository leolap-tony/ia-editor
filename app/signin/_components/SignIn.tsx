"use client"

import React from 'react'
import { signInAction } from '../actions'
import Image from 'next/image'

function SignIn() {
  return (
    <div className="h-[204px] w-[480px] p-8 bg-white rounded-xl border border-slate-200 flex-col justify-start items-center gap-8 inline-flex">
      <div className="self-stretch h-[60px] flex-col justify-start items-center gap-2 flex">
        <div className="self-stretch justify-center items-center inline-flex">
          <div className="text-slate-900 text-2xl font-semibold font-['Pretendard'] leading-loose">로그인</div>
        </div>
        <div className="self-stretch justify-center items-center inline-flex">
          <div className="text-slate-500 text-sm font-normal font-['Pretendard'] leading-tight">회사 이메일로 로그인해 주세요</div>
        </div>
      </div>
      <div className="self-stretch px-4 py-3 bg-white rounded-md border border-slate-200 justify-center items-center gap-2 inline-flex">
        <div className="w-5 h-5 p-[2.92px] justify-center items-center flex">
          <div className="w-[14.17px] h-[14.17px] relative">
          </div>
          <Image src='google.svg' width={14.17} height={14.17} alt='google' />
        </div>
        <div className="justify-center items-center flex">
          <button className="text-slate-700 text-base font-semibold font-['Pretendard'] leading-normal" onClick={async () => await signInAction()}>구글 로그인</button>
        </div>
      </div>
    </div>
  )
}

export default SignIn