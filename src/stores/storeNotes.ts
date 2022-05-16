import type NoteModel from '@/models/NoteModel'
import { defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes',{
  state: () => {
    return {
      notes: [
        {
          id: 1,
          content: 'A Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam beatae cum, quaerat laborum laboriosam blanditiis magni eveniet nisi placeat harum!'
        },
        {
          id: 2,
          content: 'This is an important information adipisicing elit. Quisquam beatae cum, quaerat laborum laboriosam blanditiis magni eveniet nisi placeat harum!'
        },
      ]
    }
  },

  actions: {
    addNote(newNote: NoteModel) {
      this.notes.unshift(newNote)
    },
    deleteNote(id: number) {
      this.notes = this.notes.filter(item => item.id !== id)
    }
  }
})