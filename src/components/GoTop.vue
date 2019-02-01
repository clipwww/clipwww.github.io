<template>
  <transition name="scale">
    <div id="js-goTop" class="goTop" v-show="isShow" @click="goTop">
      <i class="fas fa-chevron-up"></i>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class GoTop extends Vue {
  public isShow: boolean = window.scrollY > 200;

  public goTop(): void {
    const startTime = +new Date();

    const animateScroll = () => {
      const nowTime = +new Date();

      if (window.scrollY > 0) {
        window.scrollTo(0, window.scrollY - (nowTime - startTime));
      } else {
        return;
      }
      requestAnimationFrame(animateScroll);
    };
    animateScroll();
  }

  private handleScroll(event: Event): void {
    this.isShow = window.scrollY > 200;
  }

  private mounted() {
    document.addEventListener('scroll', this.handleScroll, true);
  }

  private beforeDestroy() {
    document.removeEventListener('scroll', this.handleScroll, true);
  }
}
</script>

<style lang="scss" scoped>
.goTop {
  position: fixed;
  right: 15px;
  bottom: 15px;
  z-index: 99;
  background-color: $vue_color;
  width: 40px;
  height: 40px;
  cursor: pointer;
  @include flexCenter;
}
</style>
