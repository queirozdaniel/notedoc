<template>
  <div 
    class="card mb-4">
    <div class="card-content">
      <div class="content">
          {{ note.content }}
          <div class="has-text-right has-text-grey-light">
            <small>{{ characterLength }}</small>
          </div>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Edit</a>
      <a href="#" 
        class="card-footer-item"
        @click.prevent="handleDeleteClicked(note.id)">
        Delete
      </a>
    </footer>
  </div> 
</template>

<script lang="ts" setup>
import type NoteModel from '@/models/NoteModel'
import type { PropType } from 'vue'
import { computed } from 'vue'
import { useStoreNotes } from '@/stores/storeNotes'

const storeNotes = useStoreNotes()

const props = defineProps({
  note: {
    type: Object as PropType<NoteModel> ,
    required: true
  }
})

const characterLength = computed(() => {
  let length = props.note.content.length
  let description = length > 1 ? 'characters' : 'character'
  return `${length} ${description}`
})

// Methods

const handleDeleteClicked = (id: number) => {
  storeNotes.deleteNote(id)
}



</script>