var UserModel = require('../models/userModel'),
  bcrypt = require('bcrypt'),
  commontFunction = require('../commonfunction');
module.exports = {
    register,login
  }

/**
 * @param {headers} headers 
 * @param {body} body 
 */

  function register(headers, body) {
      var json;
      /**
       * ===========using of promise to resolve result =============
       */
    return new Promise(function (resolve, reject) {
          if(body.userName == ""){
            json = {
                message:"Please Enter username."
            }
            reject(json)
          }else if(body.password == ""){
            json = {
                message:"Please Enter password."
            }
            reject(json)
          }else{
              /**
               * =======Using of bcrypt model to genrate  password =========== 
               */
            bcrypt.hash(body.password, 10).then(function (hashgenratedpassword) {  
            var user = new UserModel({
                userName: body.userName,
                password:hashgenratedpassword,
                token:commontFunction.randomNumberGenrate()
              });
              user.save().then(result=>{
                  json = {
                      message: "User created successfully.",
                  }
                   resolve(json)
              }).catch(error => {
                console.log(error);
             });
            });
          }
    })
}

/**
 * ==============End of register function ======================
 */




 /**
  * =============Start of login function ==============
  */
 function login(headers, body) {
  var json;
  /**
   * ===========Using of promise to resolve result =============
   */
return new Promise(function (resolve, reject) {
      if(body.userName == ""){
        json = {
            message:"Please Enter username."
        }
        reject(json)
      }else if(body.password == ""){
        json = {
            message:"Please Enter password." 
        }
        reject(json) 
      }else{ 
          /**
           * =======Using of bcrypt model to comapre  password =========== 
           */
          UserModel.findOne({userName:body.userName},function(err,userResult){
            if(userResult){
                /**
                 * ==========compare the password ==================
                 */
              bcrypt.compare(body.password, userResult.password, function (err, comaprePassword) {
               if(err){
                json = {
                  message:"Invalid Password Please enter correct password" 
               }
                reject(json)
               }else{
                 /**
                  * ==========Final result ==================
                  */
                json = {
                  message:"Login successfully",
                  token:userResult.token
              }
              resolve(json) 
               }
              });
               
            }else{
              json = {
                message:"Invalid Username Please enter correct username" 
            }
            reject(json) 
            }
             
          });

      }
})
}



  /**
   * ===========End of login function ================
   */