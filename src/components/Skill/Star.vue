<template>
  <div class="skill-star">
    <template v-for="n in 5">
      <div class="skill-star__content" :key="n">
        <i class="far fa-star skill-star--default"></i>
        <i class="fas fa-star-half skill-star--half" v-if="flipHalf(n)" 
          data-aos="zoom-in"
          data-aos-duration="1000"
          :data-aos-delay="n * 150"></i>
        <i class="fas fa-star skill-star--full" v-else-if="flip(n)" 
          data-aos="zoom-in"
          data-aos-duration="1000"
          :data-aos-delay="n * 150"></i>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ISkill } from '@/view-models/profile.vm';

@Component
export default class Star extends Vue {
  @Prop({
    type: Number,
    default: 0,
  })
  public star!: number;

  public flip(n: number): boolean {
    return n <= this.star;
  }

  public flipHalf(n: number): boolean {
    return n - 0.5 === this.star;
  }
}
</script>

<style lang="scss" scoped>
.skill-star {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  max-width: 160px;
  @include respond-to(sm) {
    padding-right: 0;
  }

  &__content {
    position: relative;
    width: 20px;
    height: 20px;
    @include flexCenter;
  }

  &--default {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &--full,
  &--half {
    color: $vue_color;
    font-size: 1.15rem;
  }
}
</style>
