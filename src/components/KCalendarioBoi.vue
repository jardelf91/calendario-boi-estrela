<template>
  <div class="calendar-container">
    <FullCalendar :options="calendarOptions" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import googleCalendarPlugin from '@fullcalendar/google-calendar'

const calendarOptions = ref({
  plugins: [dayGridPlugin, googleCalendarPlugin],
  initialView: 'dayGridMonth',
  height: 'auto',
  googleCalendarApiKey: 'AIzaSyBAytFO5Lu6oP1UQSSep4B1j-a4cTKnQxE',
  events: {
    googleCalendarId: '9b4e280188a68d3b7b1c65e7ab3752e2cc5eadaef2c35c8f9aad5e020401ea3c@group.calendar.google.com',
    className: 'gcal-event',
    color: 'black',
    textColor: 'yellow'
  },
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth'
  },
  buttonText: {
    today: 'Hoje',
    month: 'Mês',
  },
  locale: 'pt-br',
  themeSystem: 'standard',
  eventDisplay: 'block',
})

</script>

<style scoped>
/* Adicione estilos personalizados aqui, se necessário */
.calendar-container {
  background-color: #e1ac26;
  color: black;
  --fc-page-bg-color: #e1ac26;
  --fc-border-color: black;
  --fc-button-bg-color: black;
  --fc-button-border-color: black;
  --fc-button-hover-bg-color: black;
  --fc-button-hover-border-color: back;
  --fc-button-active-bg-color: black;
  --fc-button-active-border-color: back;
  /* height: auto;
  width: 100%; */
}

.gcal-event {
  background-color: #1e90ff;
  border-color: #1e90ff;
  color: black;
}
</style>
