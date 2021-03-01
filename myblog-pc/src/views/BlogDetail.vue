<template>
  <div class="content">
    <div class="blog-info">
      <h3 class="title">{{ blog.title }}</h3>
      <div class="other-info">
        <span class="post-time">{{ blog.postTime }}</span>
        <span class="read-count">{{ blog.readCount }} 阅读 </span>
      </div>
      <div class="blog-content">{{ blog.content }}</div>
    </div>
    <div class="comment-info">
      <div class="comment-title">
        评论
        <button id="btn-post-comment">发表评论</button>
      </div>
      <div class="comment-input">
        <textarea name="content1" cols="108" rows="6" id="content1"></textarea>
        <button id="btn-comment">评论</button>
      </div>
      <div class="comment-list">
        <div class="comment-box" v-for="com in comment" :key="com.commentId">
          <span>评论内容：</span>
          <div class="comment-content">{{ com.content }}</div>
          <div class="other-info">
            <span class="comment-author">{{ com.username }}</span>
            <span class="create-time">{{ com.creatTime }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogDetail",
  data() {
    return {
      blog: {},
      comment: [],
    };
  },
  created() {
    this.loadDetailData();
  },
  methods: {
    loadDetailData() {
      let blogId = this.$route.params.blogId;
      this.$http.request({
        url: "/blog/detail",
        params: {
          blogId,
        },
      }).then((res) => {
        console.log(res);
        let { state, blog, comments } = res.data;
        this.blog = blog;
        this.comment = comments;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  width: 810px;
  background: #f3f2f2;
  margin: 20px auto;
  padding: 30px;
  display: block;
}
.other-info {
  font-size: 10px;
}
.blog-content {
  margin: 30px 0;
}
.comment-title {
  width: 780px;
  height: 45px;
  background: #cccccc;
  line-height: 50px;
  padding: 0 10px;
  margin-bottom: 10px;
}
#btn-post-comment {
  float: right;
  border: none;
  width: 100px;
  padding: 6px;
  background: #e2c3c3;
  text-align: center;
  margin-top: 8px;
}
.comment-input {
  position: relative;
  display: none;
}
#btn-comment {
  width: 100px;
  padding: 6px;
  background: #e2c3c3;
  text-align: center;
  position: absolute;
  right: 20px;
  bottom: 15px;
  border: none;
}
.comment-list {
  margin: 10px 0;
  .other-info {
    span {
      float: right;
      margin-right: 10px;
    }
  }
  .other-info {
    height: 24px;
  }
  .comment-box {
    width: 780px;
    background: #cccccc;
    padding: 10px 10px 0 10px;
    margin: 10px 0;
  }
}
</style>