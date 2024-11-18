import { create } from 'zustand'

export const useDocumentStore = create((set) => ({
  count: 1,
  inc: () => set((state:any) => ({ count: state.count + 1 })),
}))