<template>
  <div class="profile-card">
    <div class="profile-card__content">
      <div class="profile-card__info">
        clipwww.github.io
        <h1>施工中</h1>
      </div>
      <div class="profile-card__picture">
        <img src="https://placehold.it/500x500" alt="">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Profile extends Vue {}
</script>

<style lang="scss" scoped>
.profile-card {
  position: relative;
  max-width: 950px;
  margin: -50px auto 0;
  padding: 0 15px;

  &__content {
    position: relative;
    display: flex;
    justify-content: space-between;
    height: 400px;
    background-color: $black;
    color: #fff;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);

    @include respond-to(sm) {
      padding-top: 70px;
      height: auto;
    }
  }

  &__info {
    position: relative;
    flex: 1;
    padding: 10px;

    &::after {
      position: absolute;
      right: -100px;
      top: 0;
      bottom: 0;
      content: '';
      border-style: solid;
      border-width: 400px 0 0 100px;
      border-color: transparent transparent transparent $black;
      @include respond-to(sm) {
        content: none;
      }
    }
  }

  &__picture {
    width: 400px;

    @include respond-to(sm) {
      width: 170px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: -100px;
    }
  }
}
</style>
