<template>
  <div class="bg-page">
    <div class="centered-logo-container">
      <img src="/src/assets/Logo.png" alt="Logo" class="centered-logo">
    </div>
    <q-page padding>
      <div class="calendar-container">
        <Calendar />
      </div>
    </q-page>
  </div>
</template>

<script setup lang="ts">
import Calendar from 'components/KCalendarioBoi.vue'

defineOptions({
  name: 'IndexPage'
});
</script>

<style scoped>
.bg-page {
  background-image: url('/src/assets/Fundo.png');
  background-size: contain;
  background-position: center;
  background-repeat: repeat;
}

.centered-logo-container {
  text-align: center;
  margin-bottom: 20px;
}

.centered-logo {
  max-width: 200px;
  width: 100%;
  display: inline-block;
}

.calendar-container {
  max-width: 800px;
  margin: 0 auto;
  height: auto;
  overflow: hidden;
}
</style>
