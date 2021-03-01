<template>
  <div class="wrap">
    <div id="nav">
      <div class="logo">
        <img src="./assets/搞怪.png" alt="" />
      </div>
      <div v-if="$store.state.isLogin" id="welcome">
          欢迎：{{this.$store.state.currentUser.name}}
        </div>
      <ul class="user-info" v-else>
        <li>
          <router-link to='/user/login'>登录</router-link>
        </li>
        |
        <li>
          <router-link to='/user/regist'>注册</router-link>
        </li>
      </ul>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Home",
  created() {},
  methods: {},
};
</script>


<style lang="scss" scope>
// vue-cli中配置的webpack不支持导入.scss文件
* {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
.wrap {
  width: 1200px;
  margin: 0 auto;
}
a {
  text-decoration: none;
  color: black;
}

#nav {
  height: 50px;
  background: #e2c3c3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    margin-left: 20px;
    img {
      width: 40px;
    }
  }
  .user-info {
    margin-right: 20px;
    display: flex;
    li {
      margin: 0 10px;
    }
  }
  #welcome{
    margin-right: 20px;
  }
}
</style>
