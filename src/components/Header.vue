<template>
  <header>
    <div class="bg"></div>
    <h1>clipwww.github.io</h1>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
header {
  position: relative;

  .bg {
    height: 320px;
    background-image: url('../assets/images/bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    background-attachment: fixed;
    opacity: 0.5;
  }

  h1 {
    position: absolute;
    top: 15px;
    left: 50%;
    transform: translateX(-50%);
    text-shadow: 1px 1px #fff;
    text-align: center;
  }
}
</style>
