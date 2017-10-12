<template>
  <div id="app">
    <header-alumno />
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderAlumno from '@/components/HeaderAlumno.vue'

export default {
  name: 'app',
  components: {
    HeaderAlumno
  }
}
</script>
