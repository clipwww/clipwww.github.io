<template>
	<div class="container">
		<div class="row">
			<div class="col-md-5">
				<div class="info-box">
					<header>
						<i class="ion-information-circled"></i><span>基本資料</span>
					</header>
					<div class="info-box--body">
						<ul>
							<li><i class="ion-social-octocat"></i><a href="https://github.com/clipwww" title="clipwww github" target="_blank">github.com/clipwww</a></li>
							<li><i class="ion-ios-calendar"></i>1990 / 03 / 30</li>
							<li><i class="ion-ios-telephone"></i>0925151578（19:00 - 22:00）</li>
							<li><i class="ion-ios-email"></i><a href="mailto:clipwww@gmail.com">clipwww@gmail.com</a></li>
							<li><i class="ion-briefcase"></i>蝦米智慧媒體Web前端工程師</li>
							<li><i class="ion-university"></i>東海大學資管系碩士</li>
							<li><i class="ion-university"></i>東海大學資工系學士</li>
						</ul>
					</div>
				</div>

				<div class="info-box">
					<header>
						<i class="ion-settings"></i><span>技能</span>
					</header>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
  export default {
    name: 'hello',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
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
					transform: translate(-50%, -52%);
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
			> ul{
				padding: 0;
				margin: 0;
				list-style: none;
				> li{
					padding: 2px 0;
					i{
						display: inline-block;
						font-size: 25px;
						color: #808080;
						margin-right: 10px;
						transform: translateY(4px);
					}
				}
			}
		}
	}
</style>
