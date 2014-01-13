/**
 * Connections / Adapters / Models
 * 
 * The `connections` configuration object lets you create different global "saved settings"
 * that you can mix and match in your models.  The `default` option indicates which 
 * "saved setting" should be used if a model doesn't have a connection specified.
 *
 * Note: If you're using version control, you should put your passwords/api keys 
 * in `config/local.js`, not here, in case you inadvertently push them up to your repository.
 *
 * For more information on configuration, check out:
 * http://sailsjs.org/#documentation
 */

module.exports.connections = {

  save_to_disk: {
    adapter: 'sails-disk'
  },

  save_to_postgresql: {
    adapter   : 'sails-postgresql',
    host      : process.env.PG_HOSTNAME || 'localhost',
    port      : process.env.PG_PORT || '5432',
    user      : process.env.PG_USER || 'Laptros',
    password  : process.env.PG_PASSWORD || '12341234',
    database  : process.env.PG_DATABASE || 'newblogdev',
    ssl: {
      rejectUnauthorized: false
    }
  },

  local_pg: {
    adapter: 'sails-postgresql',
    host: 'localhost',
    port: '5432',
    user: 'Laptros',
    password: '12341234',
    database: 'newblogdev'
  }

};

/**
 * Default database for all model storage (possible to override in models specifically, see docs)
 */
module.exports.model = {
  connections: [ 'local_pg' ]
};