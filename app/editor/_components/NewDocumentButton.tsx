import React from 'react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { createDocument } from '../actions'

function NewDocumentButton() {
  const handleSubmit = async (e:any)=>{
    'use server'
    e.preventDefault()
    console.log(e)
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'destructive'}>+새 도큐먼트</Button>
      </DialogTrigger>
      <DialogContent className='w-[400px]'>
        <DialogHeader>
          <DialogTitle>새 도큐먼트 만들기</DialogTitle>
          <form className='flex flex-col gap-4' action={createDocument}>
            <Input name='name' required></Input>
            <div className='flex justify-between'>
              <DialogClose asChild><Button variant={'outline'}>취소</Button></DialogClose>
              <DialogClose type='submit' asChild><Button>만들기</Button></DialogClose>
            </div>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default NewDocumentButton