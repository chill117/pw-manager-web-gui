var app = app || {}

$(function($) {

	'use strict'

	app.PasswordsCollection = Backbone.Collection.extend({

		model: app.PasswordModel,

		localStorage: new Backbone.LocalStorage('Passwords')

	})

})