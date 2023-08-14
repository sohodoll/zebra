<template>
  <footer>
    <Logo />
    <p class="copyright">© alpha, 2023</p>
  </footer>
</template>
<script>
import Logo from './Logo.vue'
export default {
  name: 'Footer',
  components: {
    Logo,
  },
}
</script>
<style>
footer {
  background: #f0f6fe;
  padding: 64px 0;
}
.copyright {
  margin-left: 93px;
  color: #81899d;
  font-size: 16px;
  font-weight: 400;
  line-height: 140%;
}
</style>
