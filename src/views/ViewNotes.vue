<template>
  <div class="notes">

    <div class="card has-background-success-dark p-4 mb-4">
      <div class="field">
        <div class="control">
          <textarea class="textarea" 
            v-model="newNote"
            placeholder="Add a new note"
            ref="newNoteRef"></textarea>
        </div>
      </div>
  
      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button 
            class="button is-link has-background-success"
            :disabled="newNote.trim().length == 0"
            @click="addNote">
            Add New Note
          </button>
        </div>
      </div>
    </div>

    <Note 
      v-for="note in notes"
      :key="note.id"
      :note="note"
      @deleteClicked="deleteNote"
    />

  </div>
</template>

<script setup lang="ts">

import { ref } from 'vue'
import type NoteModel from '@/models/NoteModel'
import Note from '@/components/Notes/Note.vue'

const newNote = ref('')
const newNoteRef = ref()

const notes = ref<Array<NoteModel>>([
  {
    id: 1,
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam beatae cum, quaerat laborum laboriosam blanditiis magni eveniet nisi placeat harum!'
  },
  {
    id: 2,
    content: 'This is an important information adipisicing elit. Quisquam beatae cum, quaerat laborum laboriosam blanditiis magni eveniet nisi placeat harum!'
  },
])

const addNote = () => {
  let note: NoteModel = {
    id: new Date().getTime(),
    content: newNote.value
  }
  notes.value.unshift(note)
  reset()
}

const deleteNote = (idToDelete: number) => {
  notes.value = notes.value.filter(item => item.id !== idToDelete)
}

const reset = () => {
  newNote.value = ''
  newNoteRef.value.focus()
}

</script>