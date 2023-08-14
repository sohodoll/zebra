<template>
  <div class="intro">
    <p class="title">Новости</p>
    <img :src="backgroundImage" alt="backgroundImage" />
  </div>
</template>
<script>
import backgroundImage from '../assets/background.jpg'

export default {
  name: 'Intro',
  data() {
    return {
      backgroundImage,
    }
  },
}
</script>
<style>
.intro {
  position: relative;
}

.intro img {
  max-width: 100vw;
}

.title {
  position: absolute;
  bottom: 15%;
  left: 5%;
  color: #17171a;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  letter-spacing: -0.4px;
}
</style>
