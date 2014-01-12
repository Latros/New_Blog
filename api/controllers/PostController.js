/**
 * PostController.js 
 *
 * @description :: 
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {

    list : function ( req, res ) {

        Post.find().sort('createdAt').exec( function ( err, posts ){

            res.locals.posts = posts.reverse();

            res.view('homepage');

        });
    },

    category: function ( req, res ) {
        res.view('category');
    },

    read : function ( req, res ) {
        res.view('read');
    }
  
};
