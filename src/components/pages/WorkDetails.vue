<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                test
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
		}),
		created(){


		}
    }
</script>

<style lang="scss">

</style>
