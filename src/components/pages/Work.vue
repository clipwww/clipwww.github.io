<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="info-box">
                    <header>
                        <i class="ion-folder"></i><span>專案</span>
                    </header>
                    <div class="about-body">
                       Q
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

</style>
