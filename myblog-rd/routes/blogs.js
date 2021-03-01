const router = require('koa-router')()
const blog = require('../controllers/blog');
const {verify} = require('../auth')

router.get('/list',blog.listBlogs);

router.get('/detail',blog.blogDetail);

router.get('/cate',blog.blogCategory);

//后端路由守卫（钩子）
router.post('/post',verify,blog.postBlog);

module.exports = router