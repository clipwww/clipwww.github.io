<template>
  <div id="app">
    <topbar/>
    <div class="main-wrap">
      <main-block/>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <footerbar />
  </div>
</template>

<script>
  import {
    mapActions,
    mapGetters
  } from 'vuex';
  import topbar from './components/topbar';
  import mainBlock from './components/mainBlock';
  import footerbar from './components/footer';

  import common from './assets/JS/common'
  import Vue from 'vue'
  import axios from 'axios'
  import VueAxios from 'vue-axios'
  
  Vue.use(VueAxios, axios)
  
  export default {
    name: 'app',
    components: {
      topbar,
      mainBlock,
      footerbar
    },
    data() {
      return {
  
      }
    },
    computed: Object.assign(mapGetters({
      FbAccessTokenUrl: "GetFbAccessTokenUrl",
      access_token: "GetAccessToken",
      fbApiUrl: "GetFbApiUrl",
      fbInfo: "GetMyFbInfo"
    }), {
  
    }),
    methods: Object.assign(mapActions([
      "UpdateMyFbInfo",
      "UpdateAccessToken"
    ]), {
      GetFbInfo() {
        Vue.axios.get(this.FbAccessTokenUrl)
          .then((res) => {
            this.UpdateAccessToken(res.data.access_token);
          })
          .catch(e => {
            console.log(e);
          })
          .then(()=>{
            let param = {
                "fields": "picture, name",
                "access_token": this.access_token
            };
            Vue.axios.get(common.addQueryString(this.fbApiUrl + "100000352745135",  param))
              .then(res=>{
                this.UpdateMyFbInfo(res.data);
              })
          });
      }
    }),
    created() {
      this.GetFbInfo();
    }
  }
</script>

<style lang="scss">
  @import "../static/css/bootstrap.min.css";
  @import "../static/css/ionicons.css";
  html,
  body {
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    backface-visibility: hidden;
    overflow: auto;
    overflow-x: hidden;
  }
  
  body {
    position: relative;
    overflow-x: hidden;
    font-family: "Arial", "Heiti TC", "Microsoft JhengHei", sans-serif;
    font-weight: 400;
    font-size: 15px;
    background-color: #f5f5f5;
    background-image: url('./assets/images/subtle_grunge.png');
    padding-top: 50px;
  }
  
  figure {
    margin: 0;
  }

  .main-wrap{
      min-height: 100vh;
  }

  .paper{
    background-color: white;
		border-radius: 5px;
		padding: 15px;
		border: 1px solid #ddd;
		margin-bottom: 15px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: all .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
    transform: translateX(100px);
  }
</style>
