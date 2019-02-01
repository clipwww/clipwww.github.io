<template>
  <div id="app">
    <Header />
    <Profile />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';
import Profile from '@/components/Profile.vue';

@Component({
  metaInfo: {
    title: 'David, Jian',
    // all titles will be injected into this template
    titleTemplate: '%s | clipwww.github.io',
  },
  components: {
    Header,
    Profile,
  },
})
export default class App extends Vue {}
</script>


<style lang="scss">
#nav {
  padding: 30px;
  text-align: center;

  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
