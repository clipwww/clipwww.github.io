<template>
	<div class="container">
		<div class="row">
			<div class="col-md-5">
				<div class="info-box">
					<header>
						<i class="ion-information-circled"></i><span>基本資料</span>
					</header>
					<div class="info-box--body">
						<ul class="info-list">
							<li><i class="ion-social-octocat"></i><a href="https://github.com/clipwww" title="clipwww github" target="_blank">github.com/clipwww</a></li>
							<li><i class="ion-ios-calendar"></i>1990 / 03 / 30（♂）</li>
							<li><i class="ion-ios-telephone"></i>0925151578（19:00 - 22:00）</li>
							<li><i class="ion-ios-email"></i><a href="mailto:clipwww@gmail.com">clipwww@gmail.com</a></li>
							<li><i class="ion-briefcase"></i>蝦米智慧媒體Web前端工程師</li>
							<li><i class="ion-university"></i>東海大學資管系碩士</li>
						</ul>
					</div>
				</div>

				<div class="info-box">
					<header>
						<i class="ion-settings"></i><span>技能</span>
					</header>
					<div class="info-box--body">
						<ul class="skill-tags clearfix">
							<li v-for="item in resumeData.skills" :style="{ fontSize: `${item.value}px`, backgroundColor: item.color }">
								{{ item.name }}
							</li>
						</ul>
					</div>
				</div>

				<div class="info-box hidden-sm hidden-xs">
					<header>
						<i class="ion-social-instagram"></i><span>Instagram</span>
					</header>
					<div class="info-box--body">
						<ul class="ig-pic clearfix">
							<li v-for="item in igPics">
								<img :src="item.images.thumbnail.url" :alt="item.caption.text" />
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="col-md-7">
				<div class="time-box" v-for="item in resumeData.timeline">
					<div class="time-box--head clearfix">
						<img :src="fbInfo.picture.data.url" :alt="fbInfo.name">
						<span class="name">{{ fbInfo.name }}</span>
						<span class="time">{{ item.date.getFullYear() }} 年 {{ item.date.getMonth() + 1 }} 月<i class="ion-ios-time-outline"></i><i class="ion-earth"></i></span>
					</div>
					<div class="time-box--body">
						<div class="markdown-wrap" v-html="Marked(item.content)"></div>
						<div class="time-box--share">
							<a :href="[`http://www.facebook.com/sharer.php?u=${current_url}`]" title="share to Facebook"
							:onclick="[`ga('send', 'social', 'Facebook', 'Share', '${current_url}' );`]">
								<i class="ion-android-share"></i>分享
							</a>
						</div>
					</div>
					<div class="time-box--footer">
						<i class="like"></i><a href="javascript:void(0);">我、邊緣人和其他 85 人</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import marked from 'marked'
	import common from '../../assets/JS/common'
	import jsonp from 'jsonp'
	import {
		mapActions,
		mapGetters
	} from 'vuex';
	export default {
		name: 'home',
		data() {
			return {
				current_url: location.origin,
				igClientId: "f1c8b84c85ea439db955254bbf990929",
				igApiUrl: common.addQueryString("https://api.instagram.com/v1/users/" + 1268817115 + "/media/recent/", {
					access_token: "1268817115.f1c8b84.bfa68ce027dd4c38bbdbd63c623b2782"
				}),
				igPics: []
			}
		},
		computed: Object.assign( mapGetters({
			resumeData: "GetResumeData",
			fbInfo: "GetMyFbInfo"
		}),{

		}),
		methods: Object.assign(mapActions([""]),{
			Marked(val){
				return marked(val, {  });
			},
			GetIgPic(){
				jsonp(this.igApiUrl, null, (err, res) =>{
					if(err){
						console.error(err.message);
					}else{
						this.igPics = res.data.slice(0,9);
					}
				})
			}
		}),
		created(){
			this.GetIgPic();
		}
	}
</script>


<style lang="scss">
	.info-box{
		background-color: white;
		border-radius: 5px;
		padding: 15px;
		border: 1px solid #ddd;
		margin-bottom: 15px;

		header{
			border-bottom: 1px solid #ddd;
			padding: 5px 0;
			i{
				display: inline-block;
				position: relative;
				width: 30px;
				height: 30px;
				background-color: #3b5998;
				margin-right: 10px;
				border-radius: 50%;
				font-size: 20px;

				&::before{
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					color: white;
				}
			}

			span{
				display: inline-block;
				position: relative;
				font-size: 20px;
				transform: translateY(-7px);
			}
		}

		&--body{
			> ul.info-list{
				padding: 0;
				margin: 0;
				list-style: none;
				> li{
					padding: 2px 0;
					i{
						display: inline-block;
						font-size: 25px;
						color: #808080;
						width: 24px;
						text-align: center;
						margin-right: 10px;
						transform: translateY(4px);
					}
				}
			}

			> ul.skill-tags{
				padding: 0;
				margin: 0;
				list-style: none;
				> li{
					display: inline-block;
					padding: 2px 15px;
					background-color: #808080;
					margin: 10px 10px 0 0;
					border-radius: 50px;
					color: white;
				}
			}
		}
	}

	.time-box{
		background-color: white;
		border-radius: 5px;
		border: 1px solid #ddd;
		margin-bottom: 15px;

		&--head{
			padding: 15px;

			img{
				width: 50px;
				height: 50px;
				float: left;
				margin-right: 10px;
			}
			.name{
				margin-top: 5px;
				color: #29487d;
				font-size: 20px;
			}
			.time{
				display: block;
				color: #808080;
				font-size: 12px;
				i{
					margin-left: 10px;
				}
			}
		}

		&--body{
			padding: 0 15px;
		}

		&--share{
			padding: 5px 0;
			border-top: 1px solid #ddd;
			a{
				color: #666;
			}
			i{
				margin-right: 5px;
				font-size: 18px;
			}
		}

		&--footer{
			border-top: 1px solid #ddd;
			background-color: #f6f7f9;
			padding: 10px 15px;
			position: relative;

			.like{
				display: inline-block;
				background-image: url('../../assets/images/j5wDbutfAGa.png');
				background-repeat: no-repeat;
				background-size: 170px 126px;
				background-position: -36px -76px;
				height: 16px;
				width: 16px;
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
			}

			a{
				padding-left: 21px;
				vertical-align: middle;
				color: #365899;
			}
		}
	}

	.ig-pic{
		padding: 10px 0 0;
		margin: 0;
		list-style: none;

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
