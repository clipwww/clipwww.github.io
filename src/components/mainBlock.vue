<template>
  	<div class="container mainBlock">
		<figure class="main-visual">
			<img class="image" src="../assets/images/1492961499230.png" alt="main visual">
            <h2>{{ fbInfo.name }}<span>（David, Jian）</span></h2>
            <figcaption>Pixiv illust_id=62046607<br/>作者：Kare（Pixiv id=1045048）</figcaption>
		</figure>
		<div class="menu">
            <div class="myPic" >
                <img :src="fbInfo.picture.data.url" :alt="fbInfo.name">
            </div>
            <ul class="link">
                <li :class="{ active: IsNowRoute('Home')}">
                    <router-link to="/" >
                        <i class="ion-ios-home"></i>
                        <span>首頁</span>
                    </router-link>
                </li>
                <li :class="{ active: IsNowRoute('About')}">
                    <router-link to="/About">
                        <i class="ion-person"></i>
                        <span>關於</span>
                    </router-link>
                </li>
                <li :class="{ active: IsNowRoute('Work')}">
                    <router-link to="/Work">
                        <i class="ion-folder"></i>
                        <span>專案</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/">
                        <i class="ion-more"></i>
                        <span>更多<i class="ion-arrow-down-b"></i></span>
                    </router-link>
                </li>
            </ul>
		</div>
	</div>
</template>

<script>
    import objectFitImages from 'object-fit-images';
    import {
        mapActions,
        mapGetters
    } from 'vuex';
    export default {
        data(){
            return{
               
            }
        },
        computed: Object.assign(mapGetters({
                fbInfo: "GetMyFbInfo"
            }), {

        }),
        methods:{
			IsNowRoute(val){
				return this.$route.name.indexOf(val) >= 0;
			}
        },
        created(){
            objectFitImages();
        }
    }
</script>

<style lang="scss" scope>
    .mainBlock{
        margin-bottom: 15px;
    }

   .main-visual{
	   width: 100%;
	   height: 0;
	   padding-bottom: 37%;
	   position: relative;

	   .image{
		   position: absolute;
		   top: 0;
		   left: 0;
		   width: 100%;
		   height: 100%;
		   object-fit: cover;
		   object-position: bottom;
           font-family: "object-fit: cover; object-position: bottom;";
	   }

       figcaption{
           position: absolute;
           top: 0;
           right: 5px;
           text-align: right;
           color: white;
           font-size: 10px;
           opacity: .5;
       }
        
        h2{
            position: absolute;
            margin: 0;
            color: white;
            bottom: 10px;
            left: 180px;
            font-size: 35px;
            z-index: 2;
            span{
                font-size: 15px;
            }
        }

       &::before{
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-image: linear-gradient(rgba(0,0,0,0) 0%,rgba(0,0,0,0) 70%, rgba(0,0,0,.5) 100%);
            z-index: 1;
       }
   }

   .menu{
       position: relative;
       height: 50px;
       background-color: white;
       border: 1px solid #ddd;
       border-top: 0;
       border-radius: 0 0 5px 5px;

        .myPic{
            position: absolute;
            left: 15px;
            bottom: 15px;
            width: 148px;
            height: 0;
            padding-bottom: 150px;
            border-radius: 5px;
            border: 1px solid #808080;
            background-color:  white;
            z-index: 2;

            img{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: top;
                font-family: "object-fit: cover; object-position: top;";
                padding: 5px;
            }
        }

        .link{
            padding: 0;
            margin: 0;
            list-style: none;
            width: 600px;
            height: 100%;
            padding-left: 180px;
            > li{
                float: left;
                width: 25%;
                height: 100%;
                position: relative;
                border-left: 1px solid #ddd;

                &:last-child{
                    border-right: 1px solid #ddd;
                }

                &.active{
                    &::before{
                        content:"";
                        position: absolute;
                        left: 50%;
                        bottom: -8px;
                        border: solid #ddd;
                        border-width:  1px 0 0 1px;
                        width: 15px;
                        height: 15px;
                        background-image: url('../assets/images/subtle_grunge.png');
                        transform: translateX(-50%) rotateZ(45deg);
                    }
                }

                > a{
                    display: block;
                    height: 100%;
                    width: 100%;
                    &:hover{
                        background-color: rgba(0,0,0,.1);
                    }
                    > i{
                        display: none;
                    }
                    span{
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        font-size: 16px;
                        white-space: nowrap;
                        i{
                            margin-left: 5px;
                        }
                    }
                }
            }
        }
   }

   @media(max-width: 992px){
       .mainBlock{
           padding: 0;
       }

       .main-visual{
           h2{
              left: 50%;
              transform: translateX(-50%); 
              white-space: nowrap;
              bottom: -115px;
              color: black;
              span{
                  display: block;
              }
           }
       }

       .menu{
           height:  200px;
            border-radius: 0;

           .myPic{
               width: 100px;
               padding-bottom: 98px;
               left: 50%;
               bottom: 150px;
               transform: translateX(-50%);
           }

           .link{
               padding: 0;
               width: 100%;
               padding-top: 135px;
                > li{
                    border: none;
                    border-top: 1px solid #ddd;
                    + li{
                        border-left: 1px solid #ddd;
                    }
                    &:last-child{
                        border-right: none;
                    }

                    a{
                        text-align: center;
                        > i{
                            display: block;
                            font-size: 24px;
                        }
                        span{
                            top: 70%;
                            font-size: 14px;
                            i{
                                display: none;
                            }
                        }
                    }
                }
           }
       }
   }
</style>
