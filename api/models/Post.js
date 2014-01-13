/**
 * Post.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

	attributes: {

        title: {
            type: 'STRING',
            required: true,
            unique: true
        },

        content: {
            type: 'STRING',
            required: true
        },

        author: {
            type: 'STRING',
            required: true
        },

        category: {
            type: 'STRING',
            required: true
        },

        slug: {
            type: 'STRING',
            required: true,
            unique: true
        }

	},

    beforeValidation: function ( inputtedValues, next ) {

        // Silly SLUG generation... TODO: find better rexep :P
        inputtedValues.slug = inputtedValues.title
                                .replace(',','')
                                .replace('-','')
                                .replace(/\W/g,'-')
                                .replace('--','-')
                                .toLowerCase();
        next();
    }

};