<template>
  <div class="container">
    <Experience />
    <Skill />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Experience from '@/components/Experience.vue';
import Skill from '@/components/Skill.vue';

@Component({
  components: {
    Experience,
    Skill,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
</style>
