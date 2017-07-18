<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="info-box">
                    <header>
                        <i class="ion-folder"></i><span>專案</span>
                    </header>
                    <div class="work-list-wrap">
                       <transition-group tag="ul" name="fade" class="work-time-line">
                           <li class="work-item" v-for="item in resumeData.works" :key="item.id">
                               <router-link :to="{ name: 'WorkDetails', params: { id: item.id }}">
                                    <div class="content">
                                        <span class="company">【{{ item.company }}】</span>
                                        <h3 class="title">{{ item.title }}</h3>
                                        <ul class="tags"><li v-for="(tag, index) in item.tags" :key="index">{{ tag }}</li></ul>
                                    </div>
                               </router-link>
                           </li>
                       </transition-group>
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
        name: "Work",
        data(){
            return{
               
            }
        },
		computed: Object.assign( mapGetters({
			resumeData: "GetResumeData",
		}),{
            
		}),
		methods: Object.assign(mapActions([""]),{
			Marked(val){
				return marked(val, {  });
            },
		}),
		created(){


		}
    }
</script>

<style lang="scss">
    .work-list-wrap{
        display: flex;
        justify-content: center;
        align-items: center;

        .work-time-line{
            @extend %list-init;
            width: 4px;
            background-color: rgba(0,0,0,.5);
            margin: 30px 0;
            padding: 30px 0;
            .work-item{
                position: relative;
                height: 160px;

                >a{
                    color: white;
                    text-decoration: none;
                }

                &::before{
                    content: "";
                    position: absolute;
                    top: 3px;
                    left: 50%;
                    transform: translateX(-50%);
                    border-radius: 50%;
                    border: 3px solid white;
                    width: 18px;
                    height: 18px;
                    background-color: rgba(0,0,0,.5);
                    box-shadow: 0 0 0 4px rgba(0,0,0,.5);
                }
                
                &:nth-child(2n+1){
                    .content{
                        left: 30px;
                        &::before{
                            left: -15px;
                        }
                    }
                }

                &:nth-child(2n){
                    .content{
                        right: 30px;
                        &::before{
                            right: -15px;
                        }
                    }
                }

                .content{
                    position: absolute;
                    top: 0;
                    padding: 5px 15px;
                    width: 250px;
                    background-color: #3b5998;
                    border-radius: 5px;
                    box-shadow: 10px 10px 0 lighten(#3b5998, 40);
                    cursor: pointer;

                    &::before{
                        content: "";
                        position: absolute;
                        top: 10px;
                        border: 15px solid;
                        border-color:  #3b5998 transparent transparent transparent;
                    }

                    .company{
                        font-size: 12px;
                    }

                    .title{
                        margin: 0;
                        margin-bottom: 10px;
                        font-size: 20px;
                    }

                    .tags{
                        @extend %list-init;
                        > li{
                            display: inline-block;
                            background-color: #D4EBE8;
                            padding: 0 10px;
                            border-radius: 15px;
                            font-size: 13px;
                            color: black;
                            margin: 0 5px 5px 0;
                        }
                    }
                }
            }
        }
    }

    .fade-enter-active, .fade-leave-active{
        transition: .5s;
        transform: translateY(0px);
    }


    .fade-enter, .fade-leave-to{
        opacity: 0;
        transform: translateY(50px);
    }


    @media(max-width: 992px){
        .work-list-wrap{
            justify-content: left;
            .work-time-line{
                .work-item{
                    &:nth-child(2n){
                        .content{
                            right: initial;
                            left: 30px;
                            &::before{
                                right: initial;
                                left: -15px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
