<template>
	<div class="content">
		<div class="center">
			<div class="label">趣考网络</div>
			<div class="login-box">
				<div class="login-box-top">
					<div class="label-cn">程序猿养成系统</div>
					<div id="label-en" class="label-en">Programmers develop systems</div>
				</div>
				<div class="login-box-center">
					<p>
						用户名：
						<input type="text" name="user_name" id="user_name">
					</p>
					<p>
						密&emsp;码：
						<input type="text" name="password" id="password">
					</p>
				</div>
				<div class="login-box-bottom">
					<div class="login-btn">登录</div>
					<p>还没有账号？ <a href="register.html">立即注册</a></p>
				</div>
			</div>
		</div>
		<div class="copyright">CopyRight @ finalexam.cn 2019</div>
	</div>
</template>

<style>
	.content {
		background: #389AE3;
		width: 100%;
		height: 100%;
	}

	.center {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		position: absolute;
		top: 180px;
		left: 0;
		width: 60%;
		margin: 0 20%;
		height: 500px;
	}

	.label {
		font-family: 'fzhanzhenguangbiaos-gbregular';
		font-size: 7em;
		padding: 0 30px;
		line-height: 480px;
		margin-bottom: 20px;
		color: #fefefe;
	}

	.login-box {
		background: #fefefe;
		width: 500px;
		height: 300px;
		margin: 100px 0;
		border-radius: 30px;
	}

	.login-box-top {
		background: #3193DC;
		width: 100%;
		padding: 8px 0;
		border-radius: 30px 30px 0 0;
	}

	.label-cn {
		font-size: 1.8em;
		color: #fefefe;
		width: 100%;
		line-height: 100%;
		padding: 8px 0 5px 0;
		text-align: center;
	}

	.label-en {
		font-size: 1em;
		color: #fefefe;
		width: 100%;
		line-height: 100%;
		padding-bottom: 4px;
		text-align: center;
	}

	.login-box-center {
		margin-top: 25px;
	}

	.login-box-center p {
		color: #101010;
		display: block;
		width: 400px;
		margin: 10px 50px;
		font-size: 1.15em;
		line-height: 40px;
	}

	.login-box-center input {
		color: #888888;
		border: 1px solid #BBBBBB;
		border-radius: 5px;
		font-size: 0.8em;
		padding: 8px 5px;
		width: 300px;
	}

	.login-box-bottom {}

	.login-box-bottom p {
		font-size: 0.75em;
		color: #666;
		margin-left: 130px;
	}

	.login-box-bottom a {
		color: #1E6DEE;
		text-decoration: none;
	}

	.login-btn {
		background: #3193DC;
		padding: 8px 6px;
		width: 300px;
		margin-top: 15px;
		margin-left: 130px;
		font-size: 1.05em;
		border-radius: 5px;
		color: #fefefe;
		text-align: center;
	}

	.copyright {
		color: #fefefe;
		position: absolute;
		bottom: 130px;
		width: 100%;
		text-align: center;
		font-size: 1.7em;
	}

	@font-face {
		font-family: 'fzhanzhenguangbiaos-gbregular';
		src: url('../fonts/fzhanzhenguangbiaos-gbregular.ttf') format('truetype');
		font-weight: normal;
		font-style: normal;
	}

	@font-face {
		font-family: 'SourceHanSansCN-Normal';
		src: url('../fonts/SourceHanSansCN-Normal.ttf') format('truetype');
		font-weight: normal;
		font-style: normal;
	}
</style>

<script>
	export default {
		name: 'login'
	}
</script>
