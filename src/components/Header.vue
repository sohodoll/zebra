<template>
  <header>
    <Logo />
  </header>
</template>
<script>
import Logo from './Logo.vue'

export default {
  name: 'Header',
  components: {
    Logo,
  },
}
</script>
<style scoped>
header {
  padding: 36px 0;
}
</style>
