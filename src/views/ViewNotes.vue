<template>
  <div class="notes">

    <div class="card has-background-success-dark p-4 mb-4">
      <div class="field">
        <div class="control">
          <textarea class="textarea" 
            v-model="newNote"
            placeholder="Add a new note"></textarea>
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

    <div 
      v-for="note in notes"
      :key="note.id"
      class="card mb-4">
      <div class="card-content">
        <div class="content">
           {{note.content}}
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">

import type Note from '@/views/models/Note'
import { ref } from 'vue'

const newNote = ref('')

const notes = ref<Array<Note>>([
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
  let note: Note = {
    id: new Date().getTime(),
    content: newNote.value
  }
  notes.value.unshift(note)
}

</script>