<template>
  <div class="container">
    <div class="content">
      <h3>登录</h3>

      <p>用户名：<input type="text" id="username" v-model="username" /></p>
      <p>密码：<input type="password" v-model="pass" /></p>
      <p>
        <button @click="doLogin" type="primary" id="btn">登录</button>
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: "Login",
  data() {
    return {
      username: "",
      pass: "",
    };
  },
  methods: {
    doLogin() {
      this.$http.request({
        method: "post",
        url: "/user/login",
        data: {
          username: this.username,
          pass: this.pass,
        },
      }).then((res) => {
          let {state,token} = res.data;
        if(state === "success"){
            localStorage.setItem('mytoken',token);
            sessionStorage.setItem('mytoken',token);
            this.$router.push('/');
            this.$store.commit('checkLogin',this.username)
            
        }else{
            alert('用户名或密码不正确！');
        }
      });
    },
  },
};
</script>

<style scoped>
.content {
  width: 650px;
  background: #cccccc;
  margin: 0 auto;
  margin-top: 40px;
  text-align: center;
  padding: 20px 0;
}
.content p {
  margin: 20px 0;
}
#btn {
  width: 100px;
  height: 30px;
  border: none;
  background: #e2c3c3;
}
input {
  border: none;
}
</style>