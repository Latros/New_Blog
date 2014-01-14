/**
 * Routes
 *
 * Your routes map URLs to views and controllers.
 *
 */

module.exports.routes = {

  '/': {
    controller: 'post',
    action: 'homepage'
  },

  '/about': {
    view: 'about'
  },

  '/contact': {
    view: 'contact'
  },

  '/links': {
    view: 'links'
  },

  '/post': {
    cors: true
  },

  'get /read/:slug': 'PostController.read',
  'get /category/:category': 'PostController.category'

};
