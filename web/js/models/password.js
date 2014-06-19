var app = app || {}

$(function($) {

	'use strict'

	app.PasswordModel = Backbone.Model.extend({

		defaults: {
			'title': '',
			'url': '',
			'username': '',
			'password': ''
		}

	})

})