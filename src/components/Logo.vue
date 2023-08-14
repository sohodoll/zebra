<template>
  <span class="logoContainer">
    <img :src="brandLogo" />
    <h2 class="logoName">alpha</h2>
  </span>
</template>
<script>
import brandLogo from '../assets/brandLogo.png'

export default {
  name: 'Logo',
  data() {
    return {
      brandLogo,
    }
  },
}
</script>
<style>
.logoContainer {
  display: flex;
  align-items: center;
  margin-left: 93px;
}
.logoContainer img {
  margin-right: 10px;
  width: 43px;
  height: 43px;
}
.logoName {
  color: #1d37af;
  font-size: 40px;
  font-style: normal;
  font-weight: 900;
  line-height: 120%;
  letter-spacing: -2px;
}
</style>
