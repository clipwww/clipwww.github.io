<template>
  <div class="container">
    <Experience />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Experience from '@/components/Experience.vue';

@Component({
  components: {
    Experience,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
</style>
