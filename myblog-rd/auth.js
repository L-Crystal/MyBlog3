var jwt = require('jsonwebtoken');
let mySecretKey = '942387583!@#$%^&*';

module.exports = {
    verify:async(ctx,next)=>{
        try {
            let auth = ctx.header.authorization;
            jwt.verify(auth, mySecretKey);
            await next();
        } catch (error) {
            console.log(error);
            ctx.status = 401;
            ctx.body = {
                state:'fail',
            }
        }
    }
}