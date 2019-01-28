<template>
  <div class="profile-card">
    <div class="profile-card__content">
      <div class="profile-card__info">
        <div class="profile-card__info--nickName">{{ profile.nickName }}</div>
        <div class="profile-card__info--name">{{ profile.name }}</div>
        <div class="profile-card__info--jobTitle">{{ profile.jobTitle }}</div>

        <ul class="profile-card__info--contact">
          <li><i class="fab fa-github"></i><a :href="profile.gitHub" target="_blank">{{ profile.gitHub }}</a></li>
          <li><i class="fas fa-envelope"></i><a :href="`mailto:${profile.email}`">{{ profile.email }}</a></li>
          <li><i class="fas fa-mobile-alt"></i>{{ profile.mobile }}</li>
        </ul>

        <ul class="profile-card__info--social">
          <li class="facebook"><a :href="profile.facebook" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
        </ul>

      </div>
      <div class="profile-card__picture">
        <img src="https://placehold.it/500x500" alt="">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { IProfile } from '@/store/modules/profile';

@Component
export default class Profile extends Vue {
  @Getter('profile') public profile!: IProfile;
}
</script>

<style lang="scss" scoped>
.profile-card {
  position: relative;
  max-width: 950px;
  margin: -100px auto 0;
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
    padding: 2rem;

    @include respond-to(sm) {
      text-align: center;
      padding: 10px 10px 30px;
    }

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

    &--nickName {
      font-size: 12px;
      color: #ddd;
    }

    &--name {
      font-size: 2rem;
      font-weight: bold;
      line-height: 1;
      margin-bottom: 5px;
    }

    &--jobTitle {
      margin-bottom: 15px;
    }

    &--contact {
      @include initList;
      color: #999;
      margin-bottom: 20px;

      @include respond-to(sm) {
        display: inline-block;
        text-align: left;
      }

      li {
        line-height: 2;
      }

      i {
        font-size: 1.2rem;
        width: 20px;
        text-align: center;
        margin-right: 10px;
      }
    }

    &--social {
      @include initList;
      li {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;

        &.facebook {
          color: #fff;
          background-color: #3b5998;
        }
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
