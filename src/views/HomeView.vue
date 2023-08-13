<template>
  <div class="hello">
    <h1>{{ news }}</h1>
  </div>
</template>

<script>
import getNews from '../composables/getNews'

export default {
  name: 'Home',
  setup() {
    const { news, error, load } = getNews()

    load()

    return {
      news,
      error,
    }
  },
}
</script>

<style></style>
