<template>
	<div class="login-text">
			 <h2>注&nbsp;&nbsp;&nbsp;册</h2>
	</div>
	<div class="avatar">
			 <el-avatar :size="70" :src="avatarUrl"></el-avatar>
	</div>
  <div class="login-form">
	  <div style="width: 60%;margin-left: 12%;margin-top: 15%;">
		  <el-form size="small" label-width="80px">
		   <el-form-item label="账号:" prop="account">
		     <el-input clearable v-model="account" placeholder="账号"></el-input>
		   </el-form-item>
		   <el-form-item label="邮箱:" prop="email">
		     <el-input clearable v-model="email" placeholder="邮箱"></el-input>
		   </el-form-item>
		   <el-form-item label="验证码:" prop="code">
		     <el-input clearable style="width: 50%;" v-model="code" placeholder="验证码"></el-input>
			 <el-button type="success">发送验证码</el-button>
		   </el-form-item>
		   <el-form-item label="性别:" prop="sex">
			    <el-radio v-model="radio" :label="0">保密</el-radio>
				<el-radio v-model="radio" :label="1">男</el-radio>
				<el-radio v-model="radio" :label="2">女</el-radio>
		   </el-form-item>
		  <el-form-item label="密码:" prop="password">
		      <el-input type="password" v-model="password" placeholder="密码" show-password></el-input>
		    </el-form-item>
		    <el-form-item>
		      <el-button style="width: 130px;" type="success" :loading="load" round @click="submitForm">注册 </el-button>
		    </el-form-item>
		  </el-form>
	  </div>
  </div>
</template>


<script>
	import axios from "axios";
	export default {
	  name: 'Login',
	  data () {
	        return {
	          avatarUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
			  account:'',
			  password:'',
			  email:'',
			  code:'',
			  checkList:[],
			  radio:0,
			  load:false
	        }
	      },
		methods:{
			submitForm(){
				var _this=this;
				_this.load=true;
				  axios({
				    method:'post',
				    url:'/api/im/customer/reg',
				    data:{
				      account:_this.account,
				      password:_this.password,
					  code:_this.code,
					  email:_this.email,
					  sex:_this.radio
				    }
				  }).then(function(resp){
					  console.log(resp.data);
				    if(resp.data.code == 200){
						_this.load=false;
				      _this.$message.success('注册成功');
				      _this.$router.push({name:'login',params:{account:_this.account}});
				    }else{
						_this.load=false;
				     _this.$message.warning(resp.data.message);
				    }
				
				  });
			}
		}
	}
</script>

<style scoped>
 .login-form{
	 border: solid 1px rgb(85,149,241);
	 width: 50%;
	 height: 65%;
	 display: inline-block;
	 position: absolute;
	 top: 25%;
	 left: 25%;
	 z-index: 1;
 }
 
 .login-text{
	 margin-top: 6%;
 }
 .avatar{
	 display: inline-block;
	 position: absolute;
	 top: 18%;
	 left: 46%;
	 z-index: 3;
 }
</style>
