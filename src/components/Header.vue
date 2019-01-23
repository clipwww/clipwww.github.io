<template>
  <header>

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
  height: 320px;
  background-image: url('http://trimatrixlab.com/store/flatrica/images/backgrounds/background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
</style>
