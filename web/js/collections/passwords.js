var app = app || {}

$(function($) {

	'use strict'

	app.PasswordsCollection = Backbone.Collection.extend({

		model: app.PasswordModel,

		localStorage: new Backbone.LocalStorage('Passwords'),

		getAll: function() {

			return this.localStorage.findAll()

		},

		// Retrieve an individual password record by its ID.
		getById: function(id) {

			var data = this.localStorage.find({id: game_id});

			return data !== null ? new Game(data) : null;

		}

	})

})