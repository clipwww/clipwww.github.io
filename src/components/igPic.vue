<template>
    <ul class="ig-pic clearfix" :style="isActive(isOpen)">
        <li v-for="(item,index) in igPics">
            <img :src="item.images.thumbnail.url" :alt="item.caption.text" />
        </li>
    </ul>
</template>

<script>
    import jsonp from 'jsonp'
    import common from '../assets/JS/common'
    import secretData  from '../assets/js/secretData'
    export default {
        data(){
            return{
                igApiUrl: common.addQueryString("https://api.instagram.com/v1/users/" + secretData.igParam.userId + "/media/recent/", {
                    access_token: secretData.igParam.access_token
                }),
                igPics: []
            }
        },
        props:{
            isOpen: Boolean
        },
        methods:{
            GetIgPic(){
				jsonp(this.igApiUrl, null, (err, res) =>{
					if(err){
						console.error(err.message);
					}else{
						this.igPics = res.data.slice(0,9);
					}
				})
			},
            isActive(val){
                if(!val){
                    return {
                        "maxHeight": 0 
                    }
                }else{
                    let li_height = document.querySelector(".ig-pic") ? document.querySelector(".ig-pic").clientWidth : 20
                    return{
                        "maxHeight": li_height + 10 + "px"
                    }
                }
            }
        },
		created(){
			this.GetIgPic();
		}
    }
</script>

<style lang="scss">
	.ig-pic{
		padding: 10px 0 0;
		margin: 0;
		list-style: none;
		overflow: hidden;
        transition: max-height .3s ease-in;

		> li{
			float: left;
			width: 33.33%;
			padding: 0 10px 10px 0;

			&:nth-child(3n-1){
				padding-left: 5px;
				padding-right: 5px;
			}
			&:nth-child(3n){
				padding-left: 10px;
				padding-right: 0;
			}

			img{
				position: relative;
				width: 100%;
			}
		}
	}
</style>