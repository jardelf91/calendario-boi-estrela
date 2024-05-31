<template>
  <div class="full-calendar-container">
    <FullCalendar :plugins="calendarPlugins" :initialView="initialView" :events="calendarEvents" />
  </div>
</template>

<script setup lang="ts">
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'

// Definindo os plugins e configurações do FullCalendar
const calendarPlugins = [dayGridPlugin]
const initialView = 'dayGridMonth'

// Definindo o tipo de dados para calendarEvents
const calendarEvents: Array<object> = [
  { title: 'Evento 1', start: '2024-06-01' },
  { title: 'Evento 2', start: '2024-06-15' }
]
</script>

<style scoped>
.full-calendar-container {
  max-width: 800px;
  margin: 0 auto;
}
</style>
