<template>
  <div class="profile-card">
    <div class="profile-card__content">
      <div class="profile-card__picture">
        <img src="https://placehold.it/500x500" alt="">
      </div>
      clipwww.github.io
      <h1>施工中</h1>
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
  max-width: 900px;
  margin: -50px auto 0;
  padding: 0 15px;

  &__content {
    position: relative;
    background-color: $black;
    color: #fff;
    padding: 10px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    @include respond-to(sm) {
      padding-top: 70px;
    }
  }

  &__picture {
    position: absolute;
    right: 15px;
    top: -50px;
    width: 150px;

    @include respond-to(sm) {
      right: initial;
      left: 50%;
      transform: translateX(-50%);
      top: -100px;
    }
  }
}
</style>
