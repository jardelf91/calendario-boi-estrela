<template>
  <div class="q-pa-md">
    <iframe :src="calendarUrl" style="border: 0" width="800" height="600" frameborder="0" scrolling="no">
    </iframe>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const calendarId = '9b4e280188a68d3b7b1c65e7ab3752e2cc5eadaef2c35c8f9aad5e020401ea3c@group.calendar.google.com'
const timeZone = 'America/Manaus'

const calendarUrl = computed(() => {
  return `https://calendar.google.com/calendar/embed?src=${calendarId}&ctz=${timeZone}`
})
</script>

<style scoped></style>
