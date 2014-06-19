var app = app || {}

$(function($) {

	'use strict'

	app.PasswordListItemView = Backbone.View.extend({

		tagName: 'tr',
		className: 'password-list-item',
		template: '#template-password-list-item',

		initialize: function(options) {

			this.options = options || {}

			_.bindAll(this, 'close', 'render')

			this.template = _.template($(this.template).html())

		},

		bind: function() {

			this.model.on('remove', this.close)
			this.model.on('change', this.render)

		},

		unbind: function() {

			this.model.off('remove', this.close)
			this.model.off('change', this.render)

			this._super('unbind')

		},

		render: function() {

			var data = _.clone(this.model.attributes)

			this.$el.html(this.template(data))

			return this

		}

	})

})