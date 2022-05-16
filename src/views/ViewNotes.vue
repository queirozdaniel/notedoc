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
      v-for="note in storeNotes.notes"
      :key="note.id"
      :note="note"
    />

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type NoteModel from '@/models/NoteModel'
import Note from '@/components/Notes/Note.vue'
import { useStoreNotes } from '@/stores/storeNotes'

// Stores

const storeNotes = useStoreNotes()

const newNote = ref('')
const newNoteRef = ref()

const addNote = () => {
  let note: NoteModel = {
    id: new Date().getTime(),
    content: newNote.value
  }
  storeNotes.addNote(note)
  reset()
}

const reset = () => {
  newNote.value = ''
  newNoteRef.value.focus()
}

</script>