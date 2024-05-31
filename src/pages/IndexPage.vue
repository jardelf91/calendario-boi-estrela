<template>
  <q-page class="flex flex-center">
    <GoogleCalendar />
  </q-page>

</template>

<script setup lang="ts">

import GoogleCalendar from 'components/GoogleCalendar.vue'


defineOptions({
  name: 'IndexPage'
});

</script>
