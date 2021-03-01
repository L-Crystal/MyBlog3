const userModel = require('../models/userModel');
var jwt = require('jsonwebtoken');
let mySecretKey = '942387583!@#$%^&*';

module.exports = {
    login: async (ctx) => {
        //1.接数据
        let user = ctx.request.body;
        //2.验证
        //3.查数据库
        let res = await userModel.getByNameAndPwd(user.username, user.pass);
        if (res.length > 0) {
            //登陆成功，生成token
            let payload = {
                userId: res[0].user_id,
                username: res[0].username,
            }
            let token = jwt.sign(payload, mySecretKey, { expiresIn: 120 });
            ctx.body = {
                state: 'success',
                token,
            }
        } else {
            ctx.body = {
                state: 'fail',
            }
        }
    },
    checkLogin: async (ctx) => {
        try {
            let auth = ctx.header.authorization;
            jwt.verify(auth, mySecretKey);
            ctx.body = {
                state: 'success',
            }
        } catch (error) {
            ctx.status = 401;
            ctx.body = {
                state:'fail',
            }
        }
    },
}