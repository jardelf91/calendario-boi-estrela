<template>
  <div class="q-pa-md">
    <iframe :src="calendarUrl" style="border: 0; width: 100%;" height="600" frameborder="0" scrolling="no"></iframe>
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

<style scoped>
.iframe-container {
  position: relative;
  width: 100%;
  padding-bottom: 75%;
  /* Proporção de aspecto do calendário (altura/largura) */
}

.iframe-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
</style>
