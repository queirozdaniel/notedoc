<template>
  <div 
    class="card mb-4">
    <div class="card-content">
      <div class="content">
          {{ note.content }}
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Edit</a>
      <a href="#" class="card-footer-item">Delete</a>
    </footer>
  </div> 
</template>


<script lang="ts" setup>
import type NoteModel from '@/models/NoteModel'
import { defineProps, PropType } from 'vue'

const props = defineProps({
  note: {
    type: Object as PropType<NoteModel> ,
    required: true
  }
})

// const note = defineProps<NoteModel>()

</script>