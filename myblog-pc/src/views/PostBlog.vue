<template>
  <div class="content">
    <h3>发表文章</h3>
      <p>
        分类：<select v-model="cateId">
          <option
            :value="cate.cateId"
            v-for="cate in cateList"
            :key="cate.cateId"
          >
            {{ cate.cateName }}
          </option>
        </select>
      </p>
      <p>标题：<input type="text" name="title" v-model="title" /></p>
      <p class="textarea" style="width: 700px; line-height: 40px">
        <span style="float: left">内容：</span
        ><textarea
          name="content"
          cols="70"
          rows="10"
          v-model="content"
        ></textarea>
      </p>
      <p>
        <button id="btn" @click="doPost">上传</button>
      </p>
  </div>
</template>

<script>
export default {
  name: "Post",
  data() {
    return {
      cateList: [],
       username: this.$store.state.currentUser.name,
       title: '',
       content: '',
       cateId: -1,
    };
  },
  created() {
    let myToken = localStorage.getItem("mytoken");
    if (!myToken) {
      alert("请先登录！");
      this.$router.push("/user/login");
    }
    this.loadCatory();
    
  },
  methods: {
    loadCatory() {
      this.$http.request({
        url: "/blog/cate",
      }).then((res) => {
        let { state, categories } = res.data;
        this.cateList = categories;
      });
    },
    doPost() {
      this.$http.request({
        method: "post",
        url: "/blog/post",
        data: {
          title: this.title,
          content: this.content,
          cate_id:this.cateId,
        //   username:this.username,
        },
      }).then((res) => {
        //   console.log(res);
        // let { state } = res.data;
        // if (state === "success") {
        //   this.$router.push("/");
        // } else {
        //   alert("上传失败！");
        // }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  text-align: left;
  width: 810px;
  height: 520px;
  background: #eceaea;
  margin: 20px auto;
  padding: 20px;
  h3 {
    text-align: center;
  }
  p {
    margin-top: 30px;
  }
  input,
  button,
  textarea {
    border: none;
  }
}

#btn {
  margin-top: 20px;
  padding: 10px;
  font-size: 15px;
  border: none;
  background: #e2c3c3;
  text-align: center;
  line-height: 20px;
  display: block;
  width: 150px;
  color: black;
}
</style>