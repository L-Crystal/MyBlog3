const blogModel = require('../models/blogModel');

module.exports = {
    listBlogs: async (ctx) => {
        let cateId = ctx.query.cateId;
        let blogs = [];
        if(cateId){
            blogs = await blogModel.getBlogsByCateId(cateId);
        }else{
            blogs = await blogModel.getBlogs();
        }
        
        let categories = await blogModel.getCategories();
        ctx.body = {
            state: 'success',
            blogs,
            categories,
        }
    },
    blogDetail: async (ctx) => {
        let blogId = ctx.query.blogId;
        let blog = await blogModel.getBlogById(blogId);
        let comments = await blogModel.getCommentsByBlogId(blogId);
        ctx.body = {
            state: 'success',
            blog: blog[0],
            comments,
        }
    },
    blogCategory: async (ctx) => {
        let categories = await blogModel.getCategories();
        ctx.body = {
            state: 'success',
            categories,
        }
    },
    postBlog: async (ctx) => {
        //1.接数据
        let blog = ctx.request.body;
        //2.存数据
        let res = await blogModel.saveBlog(blog);
        if (res.affectedRows > 0) {
            ctx.body = {
                state: 'success',
            }
        } else {
            ctx.body = {
                state: 'fail',
            }
        }
    }

}