<template>
	<div class="login-text">
			 <h2>登&nbsp;&nbsp;&nbsp;录</h2>
	</div>
	<div class="avatar">
			 <el-avatar :size="70" :src="avatarUrl"></el-avatar>
	</div>
  <div class="login-form">
	  <div style="width: 60%;margin-left: 12%;margin-top: 15%;">
		  <el-form size="small" label-width="80px">
		   <el-form-item label="账号" prop="account">
		     <el-input clearable v-model="account"></el-input>
		   </el-form-item>
		  <el-form-item label="密码" prop="password">
		      <el-input type="password" v-model="password" show-password></el-input>
		    </el-form-item>
		    <el-form-item>
				<el-checkbox-group v-model="checkList">
				    <el-checkbox label="记住密码"></el-checkbox>
				    <el-checkbox label="自动登录"></el-checkbox>
				  </el-checkbox-group>
			</el-form-item>
		    <el-form-item>
		      <el-button style="width: 130px;" type="success" round @click="submitForm">登录</el-button>
		    </el-form-item>
			<el-form-item>
				<el-button title='注册' @click='toReg' type="primary" icon="el-icon-user" size="mini" circle></el-button>
				&nbsp;
				<el-button title='忘记密码' type="warning" icon="el-icon-document-delete" size="mini" circle></el-button>
			</el-form-item>
		  </el-form>
	  </div>
  </div>
</template>


<script>
	export default {
	  name: 'Login',
	  data () {
	        return {
	          avatarUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
			  account:'',
			  password:'',
			  checkList:[]
	        }
	      },
		methods:{
			submitForm(){
				alert("登录");
			},
			toReg(){
				this.$router.push("/reg");
			}
		}
	}
</script>

<style scoped>
 .login-form{
	 border: solid 1px rgb(85,149,241);
	 width: 50%;
	 height: 55%;
	 display: inline-block;
	 position: absolute;
	 top: 23%;
	 left: 25%;
	 z-index: 1;
 }
 
 .login-text{
	 margin-top: 4%;
 }
 .avatar{
	 display: inline-block;
	 position: absolute;
	 top: 18%;
	 left: 46%;
	 z-index: 3;
 }
</style>
