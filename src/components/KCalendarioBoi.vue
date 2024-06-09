<template>
  <div class="calendar-container">
    <FullCalendar :options="calendarOptions" />

    <q-dialog v-model="isModalOpen" persistent>
      <q-card>
        <q-card-section>
          <div class="text-h6">{{ eventDetails.title }}</div>
          <div>{{ eventDetails.start }}</div>
          <br />
          <div>{{ eventDetails.description }}</div>
          <div v-if="eventDetails.location" class="location-section">
            <q-icon name="place" color="primary" />
            <div class="location-text">
              <a :href="`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(eventDetails.location)}`"
                target="_blank" class="location-link">
                <div class="location-name">{{ eventDetails.location.split(',')[0] }}</div>
                <div class="location-address">{{ eventDetails.location }}</div>
              </a>
            </div>
          </div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Fechar" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import googleCalendarPlugin from '@fullcalendar/google-calendar'
import { QIcon } from 'quasar'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'


const isModalOpen = ref(false)
const eventDetails = ref({
  title: '',
  start: '',
  end: '',
  description: '',
  location: ''
})

const formatStartEnd = (startStr: string, endStr: string) => {
  const startDate = new Date(startStr)
  const endDate = new Date(endStr)
  const formattedStartDate = format(startDate, "PPPP ', das' HH:mm", { locale: ptBR })
  const formattedEndTime = format(endDate, 'HH:mm', { locale: ptBR })
  return `${formattedStartDate} às ${formattedEndTime}`
}

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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  eventClick: (info: any) => {
    // Previne a navegação para o Google Calendar
    info.jsEvent.preventDefault()

    eventDetails.value = {
      title: info.event.title,
      start: formatStartEnd(info.event.startStr, info.event.endStr),
      description: info.event.extendedProps.description || 'Sem descrição',
      location: info.event.extendedProps.location || 'Sem localização',
      end: info.event.endStr || '' // Adiciona end apenas se estiver definido
    }

    isModalOpen.value = true
  }
})
</script>



<style scoped>
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
}

.gcal-event {
  background-color: #1e90ff;
  border-color: #1e90ff;
  color: black;
}

/* Novos estilos para garantir que os eventos não sejam cortados */
.fc .fc-event-title,
.fc .fc-event-time {
  white-space: normal;
  /* Permite quebra de linha */
  word-wrap: break-word;
  /* Quebra palavras longas */
}

.fc .fc-daygrid-event {
  height: auto !important;
  /* Garante que o container do evento ajuste a altura automaticamente */
}

/* Ajuste para telas pequenas */
@media (max-width: 768px) {

  .fc .fc-event-title,
  .fc .fc-event-time {
    font-size: 0.875rem;
    /* Reduz o tamanho da fonte */
  }
}

.location-section {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.location-text {
  margin-left: 10px;
}

.location-link {
  text-decoration: none;
  color: inherit;
}

.location-name {
  font-weight: bold;
  color: var(--q-color-primary);
}

.location-address {
  font-size: 0.875rem;
  color: var(--q-color-secondary);
}
</style>
