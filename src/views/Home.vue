<template>
  <div class="container">
    <Experience />
    <Skill />
    <Work />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Experience from '@/components/Experience.vue';
import Skill from '@/components/Skill/Index.vue';
import Work from '@/components/Work.vue';

@Component({
  components: {
    Experience,
    Skill,
    Work,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
</style>
