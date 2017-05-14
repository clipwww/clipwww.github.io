<template>
    <div class="container">
        <div class="paper">
            <p>然而應該搜尋不到東西...</p>
            <div class="gsearch-wrap">
                <div class="box" v-html="gsearchBox"></div>
                <div class="result" v-html="gsearchResults"></div>
            </div>
           
        </div>
    </div>
</template>

<script>
export default {
  data(){
      return{
          gsearchBox: "<gcse:searchbox id='searchbox'></gcse:searchbox>",
          gsearchResults: "<gcse:searchresults></gcse:searchresults>",
          initGSearch: null,
          initCount: 0,
          isInit: false
      }
  },
  methods:{
    InitGoogleSearch(){
            this.initCount ++;
             console.log(this.initCount);
             if(!this.isInit){
                (function() {
                    var cx = '014910670464787182056:xh8zlh07e0g';
                    var gcse = document.createElement('script');
                    gcse.type = 'text/javascript';
                    gcse.async = true;
                    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
                    var s = document.getElementsByTagName('script')[0];
                    s.parentNode.insertBefore(gcse, s);
                })();
             }

    },
    Clear(){
        if(document.querySelector(".gsc-search-box")){
            console.log("clear")
            this.isInit = true;
            clearInterval(this.initGSearch);

            if(this.$route.query.q != undefined){
                document.querySelector("[name='search']").value = this.$route.query.q;
                setTimeout(function() {
                    document.querySelector("[type='image'].gsc-search-button").click();
                }, 500);
            }
        }
    }
  },
  created(){
      this.initGSearch = setInterval(()=>{
            this.InitGoogleSearch();
         }, 500);

  },
  watch:{
      initCount(){
            this.Clear();
      }
  }
}
</script>

<style lang="scss">
.gsearch-wrap {
    .box {
        padding: 30px 15px;
        background-color: #f4f4f4;
 
        .gsc-search-box {
            line-height: 0;
            margin: 0;
            max-width: 700px;
            margin: 0 auto;
 
            .gsc-input-box {
                height: 45px;
 
                table {
                    height: 100%;
 
                    .gsst_a {
                        padding: 0 6px;
                    }
 
                    .gsib_a {
                        padding: 0 15px;
                    }
 
                    .gscb_a {
                        font-size: 35px;
                        color: #3b5998;
                    }
                }
            }
 
            .gsc-search-button {
                -moz-box-sizing: content-box;
                -webkit-box-sizing: content-box;
                box-sizing: content-box;
                margin: 0;
            }
        }
    }
 
    .result {
        .gsc-tabsArea {
            border: none;
 
            .gsc-tabHeader {
                height: 35px;
                padding: 3px 35px 0;
                border: 1px solid #3b5998;
                border-radius: 50px;
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
                font-size: 16px;
                background-color: white;
 
                &:first-child {
                    border-radius: 50px;
                    border-top-right-radius: 0;
                    border-bottom-right-radius: 0;
                }
 
                &.gsc-tabhActive {
                    background-color: #3b5998;
                    color: white;
                    text-shadow: 1px 1px 0 black;
                }
            }
        }
 
 
        .gsc-results {
            line-height: 1.5;
 
            .gs-image-box {
                padding-left: 8px;
            }
 
            .gs-snippet {
                padding-left: 8px;
            }
 
            .gsc-cursor-page {
                display: inline-block;
                background-color: white;
                color: #3b5998;
                border: 1px solid #3b5998;
                /*border-right: none;*/
                padding: 5px 12px;
                margin: 5px -1px;
                font-size: 15px;
                /*&:last-child {
                    border-right: 1px solid $primary-color;
                }*/
                &:hover {
                    background-color: #3b5998;
                    color: white;
                    text-decoration: none;
                }
 
                &.gsc-cursor-current-page {
                    background-color: #3b5998;
                    color: white;
                }
            }
        }
    }
}
</style>
