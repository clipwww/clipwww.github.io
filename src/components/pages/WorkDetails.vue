<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="info-box">
                    <header>
                        <i class="ion-folder"></i><span>建置中</span>
                    </header>
                    <br/>
                    <div class="btn btn-primary" @click="Back">返回</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import marked from 'marked'
    import { mapActions, mapGetters } from 'vuex'
    export default {
        name: "WorkDetails",
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
            Back(){
                history.back();
            }
		}),
		created(){


		}
    }
</script>

<style lang="scss">

</style>
