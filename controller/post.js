var UserModel = require('../models/userModel');
var Post = require('../models/post')

module.exports = {
    createPost,editPost,deletePost,getAllPost
  }

/**
 *  ===============create post function ==============
 * @param {token} headers 
 * @param {data} body 
 */

  function createPost(headers, body) {
    var json;
    /**
     * ===========using of promise to resolve result =============
     */
  return new Promise(function (resolve, reject) {
        if(body.title == ""){
          json = {
              message:"Please Enter title."
          }
          reject(json)
        }else if(body.desription == ""){
          json = {
              message:"Please Enter desription."
          }
          reject(json)
        }else if(headers.token == ""){
            json = {
                message:"Please Enter token."
            }
            reject(json)
          }else{
            UserModel.findOne({token:headers.token},function(err,userResult){
                 if(err){
                    json = {
                        message:"Invalid token."
                    }
                    reject(json)
                 }else{
                      var value = {
                        title:body.title,
                        description:body.description
                      }
                      var post = new Post({value});
                      post.save().then(result=>{
                        json = {
                            message: "Post created successfully.",
                        }
                         resolve(json)
                    }).catch(error => {
                      console.log(error);
                   });
                     
                 }
            })   

          
        }
  })
}

/**
 * ============End of create post ====================
 */




 /**
  * ==============Edit post function ================
  */

 function editPost(headers, body) {
    var json;
    /**
     * ===========using of promise to resolve result =============
     */
  return new Promise(function (resolve, reject) {
        if(body.title == ""){
          json = {
              message:"Please Enter title."
          }
          reject(json)
        }else if(body.desription == ""){
          json = {
              message:"Please Enter desription."
          }
          reject(json)
        }else if(body.postid == ""){
            json = {
                message:"Please Enter postid."
            }
            reject(json)
          }else if(headers.token == ""){
            json = {
                message:"Please Enter token."
            }
            reject(json)
          }else{
            UserModel.findOne({token:headers.token},function(err,userResult){
                 if(err){
                    json = {
                        message:"Invalid token."
                    }
                    reject(json)
                 }else{
                      var value = {
                        title:body.title,
                        description:body.description
                      }

                     Post.findOneAndUpdate({_id:body.postid},value,function(err,updateResult){
                         if(err){
                            json = {
                                message:"Something went wrong while updating data."
                            }
                            reject(json)
                         }else{
                            Post.findOne({_id:body.postid},function(err,findResult){
                                        if(err){
                                            json = {
                                                message:"Something went wrong while getting data."
                                            }
                                            reject(json)
                                        }else{
                                            json = {
                                                message:"Post get data successfully.",
                                                data:findResult
                                            }
                                            resolve(json)
                                        }
                            }) 
                         }
                     })
                 
                     
                 }
            })   

          
        }
  })
}


  /**
   * ==========edit post function end ==============
   */


   /**
    * ==========Delete post ================
    */
   function deletePost(headers, body) {
    var json;
    /**
     * ===========using of promise to resolve result =============
     */
  return new Promise(function (resolve, reject) {
         if(body.postid == ""){
            json = {
                message:"Please Enter postid."
            }
            reject(json)
          }else if(headers.token == ""){
            json = {
                message:"Please Enter token."
            }
            reject(json)
          }else{
            UserModel.findOne({token:headers.token},function(err,userResult){
                 if(err){
                    json = {
                        message:"Invalid token."
                    }
                    reject(json)
                 }else{
                     Post.remove({_id:body.postid},function(err,result){
                         if(err){
                            json = {
                                message:"Somethikng went wrong while delete post."
                            }
                            resolve(json)
                         }else{
                            json = {
                                message:"Post deleted successfully"
                            }
                            resolve(json)
                         }
                     })
                
                     
                 }
            })   

          
        }
  })
}



    /**
     * ============Delete post =================
     */



     /**
      * ==========get all posts ==========
      */

     function getAllPost(headers, body) {
        var json;
        /**
         * ===========using of promise to resolve result =============
         */
      return new Promise(function (resolve, reject) {
              if(headers.token == ""){
                json = {
                    message:"Please Enter token."
                }
                reject(json)
              }else{
                UserModel.findOne({token:headers.token},function(err,userResult){
                     if(err){
                        json = {
                            message:"Invalid token."
                        }
                        reject(json)
                     }else{
                         Post.find({},function(err,psotResult){
                             if(err){
                                json = {
                                    message:"Somethikng went wrong while get  posts."
                                }
                                resolve(json)
                             }else{
                                json = {
                                    message:"Post list get successfully",
                                    data:psotResult
                                }
                                resolve(json)
                             }
                         })
                    
                         
                     }
                })   
    
              
            }
      })
    }
    

      /**
       * =============get all post ===========
       */