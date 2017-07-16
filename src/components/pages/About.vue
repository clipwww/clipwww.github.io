<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="about">
                    <header class="about-head">
                        <i class="ion-person"></i> 關於
                    </header>
                    <div class="about-body">
                        <div class="about-menu">
                            <ul id="js-menu">
                                <li :class="{active: CheckShow('about')}" @click="ChangeShow('about')">關於我</li>
                                <li :class="{active: CheckShow('experience')}" @click="ChangeShow('experience')">經歷</li>
                                <li :class="{active: CheckShow('skill')}" @click="ChangeShow('skill')">技能</li>                              
                            </ul>
                        </div>  
                        <div class="about-content">
                            <div class="markdown-wrap" v-html="Marked(GetContent)"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import marked from 'marked'
    import { mapActions, mapGetters } from 'vuex'
    export default {
        name: "About",
        data(){
            return{
                nowShow: "about"
            }
        },
		computed: Object.assign( mapGetters({
			resumeData: "GetResumeData",
		}),{
            GetContent(){
                return this.resumeData.about[this.nowShow];
            }
		}),
		methods: Object.assign(mapActions([""]),{
			Marked(val){
				return marked(val, {  });
            },
            CheckShow(val){
                return this.nowShow === val;
            },
			ChangeShow(val){
				this.nowShow = val;
			}
		}),
		created(){
             window.addEventListener("scroll", (e) =>{
                 if(this.$route.name === "About"){
                    let mediaMax992 = window.matchMedia('screen and (max-width:992px)');
                    let $menu = document.querySelector("#js-menu");
                    let menuTop = document.querySelector(".about-menu").getBoundingClientRect().top;
                    if( menuTop - 50 <= 0 && !mediaMax992.matches){
                        $menu.style.top = (document.body.scrollTop - (menuTop + window.pageYOffset - 50)) + "px";
                    }else{
                        $menu.style.top = "0px";
                    }
                 }             
             }, false);
		}
    }
</script>

<style lang="scss">
    .about{
        background-color: white;
		border-radius: 5px;
		border: 1px solid #ddd;
		margin-bottom: 15px;
        .about-head{
            position: relative;
            padding: 10px 15px;
            padding-left: 45px;
            background-color: #f6f7f9;
            border-bottom: 1px solid #d3d6db;
            font-size: 20px;
            i{
                position: absolute;
                top: 50%;
                left: 15px;
                transform: translateY(-50%);
                font-size: 25px;
                color: #808080;
            }
        }

        .about-body{
            display: table;
            width: 100%;
            .about-menu{
                position: relative;
                display: table-cell;
                width: 180px;

                > ul{
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: 0;
                    padding: 15px;
                    margin: 0;
                    list-style: none;
                    transition: top .1s;

                    > li{
                        position: relative;
                        padding: 10px 0;
                        color: #808080;
                        cursor: pointer;
                        font-size: 17px;

                        &.active{
                            color: black;
                            font-weight: bold;
                           &::before{
                               content: "";
                               position: absolute;
                               left: -15px;
                               top: 50%;
                               transform: translateY(-50%);
                               width: 4px;
                               height: 50%;
                               background-color: #3B5998;
                           }
                        }

                        &:hover{
                            color: black;
                        }
                    }
                }
            }

            .about-content{
                display: table-cell;
                width: calc( 100% - 180px );
                padding: 20px;
                border-left: 1px solid #ddd;
            }
        }
    }

    @media(max-width: 992px){
        .about{
            .about-body{
                display: block;
                .about-menu{
                    display: block;
                    width: 100%;
                    > ul{
                        position: relative;     
                        top: initial;
                        left: initial;
                    }
                } 
                .about-content{
                    display: block;
                    width: 100%;
                    padding: 10px;
                }  
            }
        }
    }
</style>
