<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="info-box">
                    <div class="markdown-wrap" v-html="Marked(content)"></div>
                    <hr/>
                    <div class="btn btn-primary" @click="Back">返回列表</div>
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
               content: ""
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
            this.axios.get("/static/works/" + this.$route.params.id + ".md")
            .then((res) => {
                console.log(res);
               this.content = res.data;
            })
            .catch(e => {
                console.log(e);
            })
          

		}
    }
</script>

<style lang="scss">

</style>
