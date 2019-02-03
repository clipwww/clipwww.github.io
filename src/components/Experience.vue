<template>
  <div class="block" data-aos="fade-up">
    <div class="block__title">
      <h2><i class="fas fa-history"></i>經歷</h2>
    </div>
    <ul class="experience">
      <li class="experience__row" 
        v-for="(exp, index) in experienceList" 
        :key="index"
        data-aos="fade-right"
        data-aos-duration="500"
        :data-aos-delay="100 * index">
        <i :class="exp.iconClass" class="experience__icon"></i>
        <div class="experience__content">
          <div class="name">{{ exp.companyName }}</div>
          <div class="title">{{ exp.jobTitle }}</div>
          <div class="date">{{ exp.dateStart }} ~ {{ exp.dateEnd || 'Now' }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { IExperience } from '@/view-models/profile.vm';

@Component
export default class Experience extends Vue {
  @Getter('experienceList') public experienceList!: IExperience[];
}
</script>

<style lang="scss" scoped>
.experience {
  @include initList;

  &__row {
    position: relative;
    padding-bottom: 20px;
    display: flex;
    justify-content: flex-start;
    @include respond-to(sm) {
      justify-content: flex-end;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      background-color: $black;
      width: 5px;
      z-index: 1;
    }

    &::before {
      content: '';
      position: absolute;
      top: 20px;
      left: 46%;
      transform: translateX(-50%);
      height: 5px;
      width: 5%;
      background-color: $black;
      z-index: 2;
      @include respond-to(sm) {
        content: none;
      }
    }

    &:nth-child(even) {
      justify-content: flex-end;

      &::before {
        left: 54%;
      }

      .experience {
        &__content {
          border: none;
          border-right: 10px solid $vue_color;
          @include respond-to(sm) {
            border: none;
            border-left: 10px solid $vue_color;
          }
        }
      }
    }

    &:last-child {
      &::after {
        content: none;
      }
    }
  }

  &__content {
    position: relative;
    width: 45%;
    background-color: $black;
    color: #ddd;
    box-shadow: $box_shadow;
    padding: 10px 15px;
    border-left: 10px solid $vue_color;
    z-index: 4;

    @include respond-to(sm) {
      width: 100%;
      padding-right: 40px;
      border: none;
      border-left: 10px solid $vue_color;
    }

    .name {
      font-weight: bold;
      font-size: 1.2rem;
      color: #999;
    }
    .title {
      line-height: 1;
    }

    .date {
      margin-top: 10px;
      font-size: 0.8rem;
    }
  }

  &__icon {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: $vue_color;
    color: #fff;
    border-radius: 50%;
    box-shadow: $box_shadow;
    z-index: 3;

    @include respond-to(sm) {
      left: initial;
      right: -15px;
      top: -10px;
      z-index: 5;
    }
  }
}
</style>
