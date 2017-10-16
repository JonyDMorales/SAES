<template>
  <div id="app">
    <global-header />
    <router-view></router-view>
  </div>
</template>

<script>
import GlobalHeader from '@/components/GlobalHeader.vue'

export default {
  name: 'app',
  components: {
    GlobalHeader
  }
}
</script>
