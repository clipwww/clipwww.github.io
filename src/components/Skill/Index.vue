<template>
  <div class="block">
    <div class="block__title" data-aos="fade-up">
      <h2><i class="fas fa-star"></i>技能</h2>
    </div>
    <div class="skill">
      <div class="skill__list">
        <div class="skill__item" v-for="(skill, index) in skills" :key="index">
          <div class="skill__item--name">
            <span>{{ skill.name }}</span>
          </div>
          <div class="skill__item--star">
            <SkillStar :star="skill.star"/>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <div class="skill__tag" v-for="(name, index) in certifications" :key="index">
          {{ name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { ISkill } from '@/view-models/profile.vm';
import SkillStar from './Star.vue';

@Component({
  components: {
    SkillStar,
  },
})
export default class Skill extends Vue {
  @Getter('skills') public skills!: ISkill[];
  @Getter('certifications') public certifications!: string[];
}
</script>

<style lang="scss" scoped>
.skill {
  background-color: $black;
  padding: 15px 30px;
  border-bottom: 4px solid $vue_color;

  &__list {
    color: #fff;
    display: flex;
    flex-wrap: wrap;
  }

  @include respond-to(sm) {
    padding: 10px;
  }

  &__item {
    width: 33.333%;
    display: flex;
    align-items: center;
    margin: 10px 0;

    @include respond-to(sm) {
      width: 50%;
    }
    @include respond-to(ssm) {
      width: 100%;
    }

    &--name,
    &--star {
      flex: 1;
      text-align: center;
      line-height: 1.3;
    }

    &--name {
      @include flexCenter;

      img {
        width: 17px;
        margin-right: 5px;
      }
      span {
        font-size: 0.9rem;
      }
    }
  }

  &__tag {
    display: inline-block;
    border-radius: 50px;
    background-color: $vue_color;
    color: #fff;
    font-size: 0.9rem;
    padding: 2px 15px;
    margin: 5px 15px 5px 0;
  }
}
</style>
