var express = require('express');
var router = express.Router();
var db = require('../routes/db');
var multer = require('multer')
var RegisterController = require('../controller/register');
var PostController = require('../controller/post')
var upload = multer({})
/**
 * ===========User Register start api=============
 */
router.post('/register', upload.single('image'), function (req, res, next) {
    RegisterController.register(req.headers, req.body).then(function (register) {
      res.status(200).send(register);
    }, function (err) {
      console.log('400 error', err);
      res.status(400).send(err);
    }).catch(function (e) {
      console.log('500 error', err);
      res.status(500).send(e);
    });
  });
  
  /**
   * ============== User  Register start api End========================
   */
/**
 * ===========Login start api================================
 */
router.post('/login', upload.single('image'), function (req, res, next) {
  RegisterController.login(req.headers, req.body).then(function (login) {
    res.status(200).send(login);
  }, function (err) {
    console.log('400 error', err);
    res.status(400).send(err);
  }).catch(function (e) {
    console.log('500 error', err);
    res.status(500).send(e);
  });
});

/**
 * ============== Login api End========================
 */

/**
 * ===========Create post  start api================================
 */
router.post('/createPost', upload.single('image'), function (req, res, next) {
  PostController.createPost(req.headers, req.body).then(function (createPost) {
    res.status(200).send(createPost);
  }, function (err) {
    console.log('400 error', err);
    res.status(400).send(err);
  }).catch(function (e) {
    console.log('500 error', err);
    res.status(500).send(e);
  });
});

/**
 * ============== Create post api End========================
 */


 /**
 * ===========Edit post  start api================================
 */
router.put('/editPost', upload.single('image'), function (req, res, next) {
  PostController.editPost(req.headers, req.body).then(function (editPost) {
    res.status(200).send(editPost);
  }, function (err) {
    console.log('400 error', err);
    res.status(400).send(err);
  }).catch(function (e) {
    console.log('500 error', err);
    res.status(500).send(e);
  });
});

/**
 * ============== Create post api End========================
 */



 /**
  * =============Delete post====================
  */
 router.delete('/deletePost', upload.single('image'), function (req, res, next) {
  PostController.deletePost(req.headers, req.body).then(function (deletePost) {
    res.status(200).send(deletePost);
  }, function (err) {
    console.log('400 error', err);
    res.status(400).send(err);
  }).catch(function (e) {
    console.log('500 error', err);
    res.status(500).send(e);
  });
});


  /**
   * ====================Delete Post ============
   */

/**
  * =============get all  post====================
  */
 router.get('/getAllPost', upload.single('image'), function (req, res, next) {
  PostController.getAllPost(req.headers, req.body).then(function (getAllPost) {
    res.status(200).send(getAllPost);
  }, function (err) {
    console.log('400 error', err);
    res.status(400).send(err);
  }).catch(function (e) {
    console.log('500 error', err);
    res.status(500).send(e);
  });
});


  /**
   * ====================get all Post ============
   */




  module.exports = router;