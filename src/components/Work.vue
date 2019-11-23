<template>
  <div class="block">
    <div class="block__title" data-aos="fade-up">
      <h2><i class="fas fa-star"></i> 專案項目</h2>
    </div>
    <div class="work__item" v-for="item in works" :key="item.companyName">
      <h4>{{ item.companyName }}</h4>
      <div class="work__projects" v-for="(project, index) in item.projects" :key="index">
        <h5>{{ project.title }}</h5>
        <div v-html="project.description"></div>
        <ul class="work__tags" >
          <li v-for="(tag, j) in project.tags" :key="j">{{ tag }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';

import { WorkVM } from '@/view-models/work.vm';

@Component({})
export default class Work extends Vue {
  @Getter('works') public works!: WorkVM[];
}
</script>

<style lang="scss" scoped>
h4,
h5 {
  font-weight: bold;
  margin: 0;
}

.work {
  &__item {
    background-color: #262525;
    border-bottom: 4px solid #4fc08d;
    color: #fff;
    margin-bottom: 15px;

    h4 {
      padding: 5px 15px;
      border-bottom: 1px solid #fff;
      font-size: 1.2rem;
    }
  }

  &__projects {
    padding: 10px 15px;
    margin: 15px;
    border-radius: 5px;
    color: #262525;
    background-color: #fff;

    h5 {
      font-size: 1rem;
    }
  }

  &__tags {
    padding: 0;
    margin: 0;
    list-style: none;

    > li {
      display: inline-block;
      margin-right: 10px;
      font-size: 13px;
      background-color: #4fc08d;
      border-radius: 15px;
      color: #fff;
      padding: 0 10px;
      white-space: nowrap;
    }
  }
}
</style>