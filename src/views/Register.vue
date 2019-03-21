<template>
	<div>
		<div class="navigation">
			<div class="navigation-font">趣考网络</div>
		</div>

		<div class="main-part">
			<div class="container box">
				<div class="text-info" id="welcomeText">欢迎来到趣考网络，这里有着开放的学习交流环境，支持每一个有梦想的人成功成才~
					欢迎加入我们~</div>
				<hr class="hr">
				<div class="row">
					<div class="col-md-12">
						<div class="form input-register">
							<form method="post" action="#" accept-charset="UTF-8">
								<input id="telephone_register" class="form-control" type="text" placeholder="手机号码（仅支持中国大陆）" name="phone">
								<input id="password_register" class="form-control" type="password" placeholder="密码" name="password">
								<input id="password_confirmation" class="form-control" type="password" placeholder="再次确认密码">
								<div class="input-group input-valid-group">
									<input id="validNum" type="text" class="form-control input-valid" placeholder="验证码">
									<span class=" input-group-addon btn btn-default" style="margin-right: 0">发送验证码</span>
								</div>
								<input id="name" class="form-control" type="text" placeholder="姓名">
								<input id="stdNum" class="form-control" type="text" placeholder="学号">
								<input id="major" class="form-control" type="text" placeholder="专业">
								<label for="gender">
									<select id="gender" class="form-control form-inline">
										<option value="" style="display: none;" disabled selected>性别</option>
										<option>男</option>
										<option>女</option>
									</select>
								</label>
								<label for="college">
									<select id="college" class="form-control form-inline">
										<option value="" style="display: none;" disabled selected>学校</option>
										<option>福州大学</option>
										<option>其他学校</option>
									</select>
								</label>
								<label for="interest">
									<select id="interest" class="form-control form-inline">
										<option value="" style="display: none;" disabled selected>兴趣方向</option>
										<option>Android</option>
										<option>前端</option>
										<option>微信小程序</option>
										<option>IOS</option>
										<option>java后端</option>
									</select>
								</label>
								<textarea id="known" class="form-control input-block" rows="4" placeholder="对开源的理解"></textarea>
								<textarea id="dream" class="form-control input-block" type="text" placeholder="你的梦想"></textarea>
								<input class="btn btn-info center-block btn-lg" type="submit" value="注册" name="commit" style="display: block">
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>


	</div>
</template>

<script>
</script>

<style>
	html body{
	    margin:0;
	    padding:0;
	}
	
	.navigation{
	    background: #3193DC;
	    height:180px;
	}
	
	#welcomeText{
	    font-size: 40px;
	    letter-spacing: 5px;
	    line-height: 40px;
	}
	.main-part{
	    left: 0;
	    top: 0;
	    padding: 80px;
	    width: 100%;
	    height: 1300px;
	    background-color: rgba(246, 242, 247, 1);
	}
	
	.box{
	    padding: 100px;
	    width: 70%;
	    height: 1000px;
	    line-height: 20px;
	    background-color: rgba(254, 254, 254, 1);
	    text-align: center;
	    border: 1px solid rgba(187, 187, 187, 1);
	}
	
	.navigation-font{
	    font-family: 'fzhanzhenguangbiaos-gbregular';
	    color: white;
	    padding-top: 20px;
	    padding-left: 40px;
	    font-size: 100px;
	}
	.input-register{
	    padding-left: 10%;
	    padding-right: 10%;
	}
	
	.form-control{
	    margin: 20px;
	    border-radius: 3px;
	    background-color: rgba(0, 0, 0, 0.09);
	    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.09) inset;
	    color: #FFFFFF;
	}
	
	.input-valid-group{
	    margin-left:20px;
	}
	
	.input-valid{
	    margin:0;
	}
	.form-control:hover{
	    background-color: rgba(0,0,0,0.16);
	}
	
	.form-control:focus{
	    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.04) inset;
	    background-color: rgba(0,0,0,0.23);
	    color: #FFFFFF;
	}
	.input-block{
	
	}
	@font-face {
	    font-family: 'fzhanzhenguangbiaos-gbregular';
	    src: url('../fonts/fzhanzhenguangbiaos-gbregular.ttf') format('truetype');
	    font-weight: normal;
	    font-style: normal;
	}
</style>
