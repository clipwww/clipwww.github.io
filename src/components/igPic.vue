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
    export default {
        data(){
            return{
                igClientId: "f1c8b84c85ea439db955254bbf990929",
                igApiUrl: common.addQueryString("https://api.instagram.com/v1/users/" + 1268817115 + "/media/recent/", {
                    access_token: "1268817115.f1c8b84.bfa68ce027dd4c38bbdbd63c623b2782"
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