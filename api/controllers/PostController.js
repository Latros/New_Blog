/**
 * PostController.js 
 *
 * @description :: 
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {

    homepage : function ( req, res ) {

        Post.find().sort('updatedAt').exec( function foundPosts ( err, posts ){

            res.locals.posts = posts.reverse();

            res.view('homepage');

        });
    },

    read : function ( req, res ) {
        Post.find({
            where: {
                slug: req.param('slug')
            }
        }).exec( function foundPost ( err, posts ) {
            res.locals.posts = posts;
            res.view('read')
        });
    },

    category : function ( req, res ) {
        Post.find({
            sort: 'createdAt',
            where: {
                category: req.param('category')
            }
        }).exec( function foundPosts ( err, posts ) {
            res.locals.posts = posts.reverse();
            res.locals.category = req.param('category');
            res.view('category');
        });
    }
  
};