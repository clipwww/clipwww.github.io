<template>
    <nav class="topbar">
        <div class="container">
            <div class="topbar--icon">
                <a href="https://github.com/clipwww" title="clipwww github" target="_blank">
                    <i class="ion-social-github"></i>
                </a>
            </div>
            <div class="topbar--search">
                <div class="topbar--search--wrap">
                    <input type="text" placeholder="我也不知道這是要搜尋什麼"/>
                    <button><i class="ion-android-search"></i></button>
                </div>
                <router-link to="/">
                    <i class="ion-android-search"></i>
                </router-link>
            </div>
            <div class="topbar--right">
                <div class="topbar--right--my">
                    <label for="js-messages">
                        <figure>
                             <img :src="fbInfo.picture.data.url" :alt="fbInfo.name">
                             <figcaption>{{ fbInfo.name }}</figcaption>
                        </figure>
                    </label>
                    <input class="topbar--right--my--messages" type="checkbox" id="js-messages">
                    <div class="checkbox-popup-wrap">
                        <label for="js-messages"> </label>
                        <div class="container">
                            <div class="content">
                                <p>嗨，我是簡爾廷。</p>
                                <p>我也不知道要讓這邊點了可以幹嘛所以就弄了這個。</p>
                                <p>這邊是用chexbox + label做出來的（無js）</p>
                            </div>
                        </div> 
                    </div>
                </div>
                <div class="topbar--right--link">
                    <router-link to="/" class="topbar--right--home">
                        首頁
                    </router-link>
                </div>
            </div>
            <div class="topbar--humbuger">
                <a href="#">
                    <i class="ion-navicon"></i>
                </a>
            </div>
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
               
            }
        },
        computed: Object.assign(mapGetters({
                fbInfo: "GetMyFbInfo"
            }), {

        }),
    
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

        &--icon, &--search, &--right, &--humbuger{
            display: inline-block;
            height: $topbarHeight;
            color: white;
        }

        &--icon {
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

        &--search{
            position: relative;
            width: 300px;
            &--wrap{
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
        
        &--right{
            float: right;
            &--my{
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

                &--messages{
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
                            background-color: white;
                            margin-top: 5px;
                            padding: 15px;
                            border-radius: 5px;
                            max-width: 320px;
                            float: right;
                            z-index: 1031;

                            &::before{
                                content: "";
                                position: absolute;
                                top: -18px;
                                right: 120px;
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

            &--link{
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

        &--humbuger{
            display: none;
        }
    }

    @media(max-width: 992px){
        .topbar{
            > .container{
                padding: 0;
            }
            &--search--wrap, &--right--my figure figcaption, &--right--link{
                display: none;
            }
            &--humbuger, &--search a{
                display: block;
            }
            &--right--my{
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

                &--messages{
                    + .checkbox-popup-wrap{

                        .content{
                            &::before{
                                right: 35%;
                            }
                        }
                    }
                }
            }

            &--icon, &--search, &--right, &--humbuger{
                float: left;
                width: 25%;
            }

            &--icon, &--search, &--humbuger{
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
