<template>
  <div class="profile-card">
    <div class="profile-card__content" data-aos="zoom-in" data-aos-duration="1000">
      <div class="profile-card__info">
        <div class="profile-card__info--nickName">{{ profile.nickName }}</div>
        <div class="profile-card__info--name">{{ profile.name }}</div>
        <div class="profile-card__info--jobTitle">{{ profile.jobTitle }}</div>

        <ul class="profile-card__info--contact">
          <li><i class="fas fa-map-marker-alt"></i>{{ profile.location }}</li>
          <li><i class="fas fa-envelope"></i>{{ profile.email }}</li>
          <!-- <li><i class="fas fa-mobile-alt"></i>{{ profile.mobile }}</li> -->
        </ul>

        <ul id="js-social" class="profile-card__info--social">
          <li class="github">
            <a :href="profile.gitHub" target="_blank" @click="$g_gaEventTracking('contact', 'click', 'github')"><i class="fab fa-github"></i></a></li>
          <li class="email">
            <a :href="`mailto:${profile.email}`" @click="$g_gaEventTracking('contact', 'click', 'email')"><i class="fas fa-envelope"></i></a>
          </li>
          <li class="facebook">
            <a :href="profile.facebook" target="_blank" @click="$g_gaEventTracking('contact', 'click', 'facebook')"><i class="fab fa-facebook-f"></i></a>
          </li>
          <li class="instagram">
            <a :href="profile.instagram" target="_blank" @click="$g_gaEventTracking('contact', 'click', 'instagram')"><i class="fab fa-instagram"></i></a>
            </li>
          <li class="linkedin">
            <a :href="profile.googlePlus" target="_blank" @click="$g_gaEventTracking('contact', 'click', 'linkedin')"><i class="fab fa-linkedin-in"></i></a>
          </li>
          <!-- <li class="google"><a :href="profile.googlePlus" target="_blank"><i class="fab fa-google-plus-g"></i></a></li> -->
        </ul>

      </div>
      <div class="profile-card__picture">
        <img src="https://avatars3.githubusercontent.com/u/16633338?s=460&v=4" alt="">
      </div>
    </div>
    <div class="profile-card__about" data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="0">
      <div style="padding: 2rem;">
        <i class="fas fa-tractor"></i> 施工中
      </div>
      <div class="profile-card__hobby">
        <div  class="profile-card__hobby--item" v-for="(hobby, index) in hobbys" :key="index">
          <i :class="hobby.iconClass"></i>
          <div>{{ hobby.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { IProfile, IHobby } from '@/view-models/profile.vm';

@Component
export default class Profile extends Vue {
  @Getter('profile') public profile!: IProfile;
  @Getter('hobbys') public hobbys!: IHobby[];
}
</script>

<style lang="scss" scoped>
.profile-card {
  position: relative;
  max-width: 700px;
  margin: -200px auto 0;
  padding: 0 15px;
  @include respond-to(sm) {
    margin-top: -100px;
  }

  &__content {
    position: relative;
    display: flex;
    justify-content: space-between;
    height: 300px;
    background-color: $black;
    color: #fff;
    box-shadow: $box_shadow;

    @include respond-to(sm) {
      padding-top: 70px;
      height: auto;
    }
  }

  &__about {
    margin-top: 15px;
    background-color: $black;
    color: #fff;
    box-shadow: $box_shadow;
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
      border-width: 300px 0 0 100px;
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
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      @include respond-to(sm) {
        justify-content: center;
      }

      li {
        border-radius: 50%;
        margin-right: 10px;
        a {
          width: 35px;
          height: 35px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
        }

        &.email {
          background-color: #ee7b1e;
        }
        &.github {
          background-color: transparent;
          font-size: 2.1rem;
        }
        &.facebook {
          background-color: #3b5998;
        }
        &.instagram {
          background: $ig_bg;
        }
        &.google {
          background-color: #d34836;
        }
        &.linkedin {
          background-color: #0077b5;
        }
      }
    }
  }

  &__picture {
    width: 300px;

    @include respond-to(sm) {
      width: 170px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: -100px;
      img {
        border-radius: 50%;
      }
    }
  }

  &__hobby {
    display: flex;

    &--item {
      flex: 1;
      padding: 10px;
      font-size: 0.8rem;
      text-align: center;

      i {
        color: $vue_color;
        font-size: 2rem;
        @include respond-to(sm) {
          font-size: 1.5rem;
        }
      }
    }
  }
}
</style>
