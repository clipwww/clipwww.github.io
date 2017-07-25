<template>
    <nav class="topbar">
        <div class="container">
            <div class="icon">
                <a href="https://github.com/clipwww" title="clipwww github" target="_blank">
                    <i class="ion-social-github"></i>
                </a>
            </div>
            <div class="search">
                <div class="search-wrap">
                    <input type="text" v-model="searchWord" @keyup.enter="GoSearch" placeholder="總之是Google站內搜尋"/>
                    <button @click="GoSearch"><i class="ion-android-search"></i></button>
                </div>
                <router-link to="/Search">
                    <i class="ion-android-search"></i>
                </router-link>
            </div>
            <div class="right">
                <div class="my">
                    <label for="js-messages">
                        <figure>
                             <img :src="fbInfo.picture.data.url" :alt="fbInfo.name">
                             <figcaption>{{ fbInfo.name }}</figcaption>
                        </figure>
                    </label>
                    <input class="my-messages" type="checkbox" id="js-messages">
                    <div class="checkbox-popup-wrap">
                        <label for="js-messages"> </label>
                        <div class="container">
                            <div class="content">
                                <div class="text">
                                    <p>這個網頁是使用 vue-cli 建立</p>
                                    <p>template為預設 webpacke 2.0</p>
                                    <p>加上 vue-router 與 vuex</p>
                                    <p>樣式以 Bootstrap 為基礎後仿(抄)Facebook風格</p>
                                    <p>Icon使用 Ionic Framework</p>
                                    <p>頭貼跟名字為使用 Axios 串FB Api抓自己FB的資料</p>
                                    <p>IG照片為使用 jsonp 串IG Api抓自己的IG照片</p>
                                    <p>Source Code: <a href="https://github.com/clipwww/clipwww.github.io/tree/source" target="_blank">Here</a></p>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
                <div class="link">
                    <router-link to="/" class="home">
                        首頁
                    </router-link>
                </div>
            </div>
            <!-- <div class="humbuger">
                <a href="#">
                    <i class="ion-navicon"></i>
                </a>
            </div> -->
        </div>
    </nav>
</template>

<script>
    import {
        mapActions,
        mapGetters
    } from 'vuex';
    export default {
        data(){
             return{
               searchWord: ""
            }
        },
        computed: Object.assign(mapGetters({
                fbInfo: "GetMyFbInfo"
            }), {

        }),
        methods:{
            GoSearch(){
                this.$router.push(`/Search?q=${this.searchWord}`);
            }
        }
    
    }
</script>

<style lang="scss">
    $topbarHeight: 50px; 
    .topbar {   
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background-color: #3b5998;
        border-bottom: 1px solid #29487d;
        height: $topbarHeight;
        overflow: hidden;
        z-index: 1032;

        .icon, .search, .right, .humbuger{
            display: inline-block;
            height: $topbarHeight;
            color: white;
        }

        .icon {
            position: relative;

            a {
                display: block;
                position: relative;
                width: 40px;
                height: 100%;
                color: white;
                text-decoration: none;
    
                i {
                    position: absolute;
                    top: 50%;
                    left: 0;
                    transform: translateY(-50%);
                    font-size: 40px;
                }

                span{
                    padding-left: 50px;
                }
    
            }
        } //end icon

        .search{
            position: relative;
            width: 300px;
            .search-wrap{
                position: absolute;
                top: 50%;
                left: 5px;
                transform: translateY(-50%);
                height: 25px;
                width: 100%;
                background-color: white;
                border-radius: 3px;
                padding: 2px 10px 0;

                input{
                    display: inline-block;
                    border: none;
                    width: 80%;
                    color: black;
                    line-height: 1;

                    &:focus{
                        outline: none;
                        box-shadow: none;
                        outline-offset: 0;
                        border: none;
                    }
                }

                button{
                    position: absolute;
                    right: 0;
                    top: 1px;
                    bottom: 1px;
                    width: 20%;
                    background-color: #f6f7f9;
                    border: none;
                    border-radius: 0 2px 2px 0;
                    cursor: pointer;
                    &:focus, &:active{
                        outline: none;
                        box-shadow: inset 1px 1px 5px rgba(0,0,0,.3);
                        outline-offset: 0;
                        border: none;
                    }
                    i{
                        font-size: 20px;
                        color: black;
                        &::before{
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                        }
                    }
                }
            }

            a{
                display: none;
            }

        }//end search
        
        .right{
            float: right;
            .my{
                position: relative;
                display: inline-block;

                label{
                    margin: 0;
                }

                figure{
                    display: table;
                    padding: 0 10px 0 0;
                    margin: 0;
                    margin-top: 10px;
                    cursor: pointer;
                    border-radius: 5px;

                    &:hover{
                        background-color: rgba(0,0,0,.1);
                    }

                    img{
                        display: table-cell;
                        width: 30px;
                        margin-right: 10px;
                        border-radius: 5px;
                    }
                    figcaption{
                        display: table-cell;
                        vertical-align: middle;
                        font-size: 18px;
                    }
                }

                .my-messages{
                    display: none;
                    + .checkbox-popup-wrap{
                        display: none;
                        position: fixed;
                        top: 50px;
                        left: 0;
                        bottom: 0;
                        right: 0;

                        label{
                            position: fixed;
                            top: 50px;
                            left: 0;
                            bottom: 0;
                            right: 0;
                            background-color: rgba(0,0,0,.7);
                            z-index: 1030;
                        }

                        .content{
                            position: relative;
                            color: black;
                            margin-top: 5px;
                            padding: 0 5px;
                            z-index: 1031;

                            .text{
                                background-color: white;
                                padding: 15px;
                                border-radius: 5px;
                                max-width: 500px;
                                float: right;
                                font-size: 13px;
                            }

                            &::before{
                                content: "";
                                position: absolute;
                                top: -18px;
                                right: 10%;
                                border: 10px solid transparent;
                                border-color: transparent  transparent white transparent;
                            }
                        }
                    }
                    &:checked{
                        + .checkbox-popup-wrap{
                            display: block;
                        }
                    }
                }
            }//end my

            .link{
                display: inline-block;
                a{
                    display: inline-block;
                    position: relative;
                    color: white;
                    text-decoration: none;
                    font-size: 17px;
                    padding: 5px;
                    transform: translateY(-10px);
                    &:hover{
                        background-color: rgba(0,0,0,.1);
                    }

                    &::before{
                        content: "";
                        position: absolute;
                        left: -5px;
                        top: 50%;
                        transform: translateY(-50%);
                        width: 1px;
                        height: 80%;
                        background-color: rgba(0,0,0, .1);
                    }
                }
            
            }
        }//end right

        .humbuger{
            display: none;
        }
    }

    @media(max-width: 992px){
        .topbar{
            > .container{
                padding: 0;
            }
            .search-wrap, .right .my figure figcaption, .link{
                display: none;
            }
            .humbuger, .search a{
                display: block;
            }
            .my{
                position: relative;
                height: 100%;
                width: 100%;

                 figure img{
                    margin: 0;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }

                .my-messages{
                    + .checkbox-popup-wrap{

                        .content{
                            &::before{
                                right: 35%;
                            }
                        }
                    }
                }
            }

            .icon, .search, .right, .humbuger{
                float: left;
                width: 33.333%;
            }

            .icon, .search, .humbuger{
                position: relative;
                a{
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    color: white;
                    i{
                       font-size: 30px;
                    }
                }
            }

        }

    }
</style>
