const express = require('express');
const router = express.Router();
const userInfo = require('../models/index').userInfo;

//注册页面
router.get('/sign_up', (req, res) => { 
    res.render('signUp', {
        title: '注册'
    });
});

//登录页面
router.get('/sign_in', (req, res) => {
    res.render('signIn', {
        title: '登录'
    });
});

//个人页面
router.get('/profile', (req, res) => {
    console.log('profile number: ', req.session.userId);
    const { userId } = req.session;
    userInfo.findOne({
        where: {
            u_id: userId
        }
    }).then( u => {
        res.render('profile', {
            title: '个人页面',
            user: {
                name: u.u_name,
                email: u.email,
                avatar: u.avatar
            }
        });
    });
});

//注册接口
router.post('/sign_up', (req, res) => {
    const { name, password, role} = req.body;

    userInfo.findOrCreate({
        where: {
            u_name: name
        },
        defaults: {
            pwd: password,
            role: role
        }
    }).spread((user, created) => {
        if(created) {
            res.send('注册成功');
        } else {
            res.send('注册失败');
        }
    });
});

//登录接口
router.post('/sign_in', (req, res) => {
    const { name, password, role} = req.body;
    const { userId } = req.session;
    if(userId) {
        res.send('不能重复登录');
    }
    userInfo.findOne({
        where: {
            u_name: name,
            pwd: password,
            role: role
        }
    }).then( result => {
        if(result) {
            req.session.userId = result.u_id;
            res.send('登录成功');
        } else {
            res.send('登录失败');
        }
    });
});

//登出接口
router.post('/sign_out', (req, res) => {
     //删除session
     req.session.destroy(() => {
        res.clearCookie('userId', {});
        res.send('登出成功');
    });
});

//获取个人资料接口
router.post('/profile', (req, res) => {
    const { userId } = req.session;
    if(userId) {
        userInfo.findOne({
            where: {
                u_id: userId
            }
        }).then( u => {
            var user =  {
                name: u.u_name,
                email: u.email,
                avatar: u.avatar,
                introduction: u.u_info
            }
            res.json(user);
        });
    } else {
        res.send('请先登录');
    }
    
});
module.exports = router;