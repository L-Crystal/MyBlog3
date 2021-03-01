<template>
  <div class="content">
    <div class="blog-list">
      <div class="blog-box" v-for="blog in blogList" :key="blog.blogId">
        <h3 class="blog-title">
          <router-link :to="{ path: '/blog/detail/' + blog.blogId }">
            {{ blog.title }}
          </router-link>
        </h3>
        <p class="blog-content">{{ blog.content }}</p>
        <div class="other-info">
          <span class="post-time">{{ blog.postTime }}</span>
          <span class="read-count">{{ blog.readCount }} 阅读量</span>
          <span class="username">{{ blog.username }}</span>
        </div>
      </div>
    </div>
    <div class="sidebar">
      <div class="btns">
        <button id="btn" @click="postBlog">上传博文</button>
      </div>
      <div class="blog-cates">
        <h3>文章分类</h3>
        <a href="/">所有</a>
        <ul
          class="category-list"
          v-for="category in cateList"
          :key="category.cateId"
        >
          <li>
            <router-link :to="{ path: '/blog/cate/' + category.cateId}">{{ category.cateName }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      blogList: [],
      cateList: [],
    };
  },
  created() {
    this.loadBlogsData();
  },
  methods: {
    loadBlogsData() {
      this.$http.request({
        url: "/blog/list",
      }).then((res) => {
        let { state, blogs, categories } = res.data;
        this.blogList = blogs;
        this.cateList = categories;
      });
    },
    postBlog(){
      this.$router.push('/blog/post');
    }
  },
};
</script>

<style lang="scss" scoped>
.content {
  text-align: left;
  margin-top: 20px;
  display: flex;
  width: 1200;
  a {
    color: black;
  }
}
.blog-box {
  height: 200px;
  background: #cccccc;
  padding: 20px;
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  &:first-child {
    margin-top: 0;
  }
}
.blog-box .blog-title,
.blog-content,
.post-time,
.read-count {
  margin: 20px 0;
}
.read-count,
.username {
  margin-left: 100px;
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
.sidebar {
  width: 220px;
  h3,
  ul,
  li {
    margin: 10px 0;
  }
}
.blog-list {
  flex: 1;
  margin-right: 30px;
}
</style>









// checkLogin() {
//       //   this.axios({
//       //     method: "post",
//       //     url: "http://localhost:3000/user/checkLogin",
//       //     headers:{
//       //       "Authorization":localStorage.getItem('mytoken')
//       //     }
//       //   }).then((res) => {
//       //     let{state} = res.data;
//       //     if(state === 'fail'){
//       //       this.$router.push('/login');
//       //     }
//       //   });
//       // },
//     },