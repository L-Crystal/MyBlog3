const db = require('./db.js');

module.exports = {
    getBlogs() {
        return db.query(`select blog_id as blogId,b.title,b.content,b.post_time as postTime,read_count as readCount ,u.username
        from t_blog b,t_user u
        where b.user_id=u.user_id`);
    },
    getCategories(){
        return db.query("select cate_id as cateId,cate_name as cateName from t_category")
    },
    getBlogById(blogId){
        return db.query(`select blog_id as blogId,b.title,b.content,b.post_time as postTime,read_count as readCount ,u.username
        from t_blog b,t_user u
        where b.user_id=u.user_id and b.blog_id=?`,[blogId]);
    },
    getCommentsByBlogId(blogId){
        return db.query(`select c.comm_id as commentId,c.content,c.create_time as creatTime,u.username
        from t_comment c,t_user u
        where c.blog_id=? and c.user_id=u.user_id order by c.create_time desc`,[blogId])
    },
    saveBlog(blog){
        return db.query('insert into t_blog set ?',blog);
    },
    getBlogsByCateId(cateId){
        return db.query(`select b.blog_id as blogId,b.title,b.content,b.post_time as postTime,b.read_count as readCount,u.username
            from t_blog b,t_user u 
            where b.user_id=u.user_id and b.cate_id=?`,[cateId]);
    }

}