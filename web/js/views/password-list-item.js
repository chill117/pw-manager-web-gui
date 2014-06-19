var app = app || {}

$(function($) {

	'use strict'

	app.PasswordListItemView = Backbone.View.extend({

		tagName: 'tr',
		className: 'password-list-item',
		template: '#template-password-list-item',

		events: {
		},

		initialize: function(options) {

			this.options = options || {}

			_.bindAll(this, 'close', 'render', 'focus')

			this.template = _.template($(this.template).html())

			this.bind()

		},

		focus: function(field) {

			field || (field = 'title')

			this.makeFieldEditable(field)
			
		},

		unfocus: function() {

			for (var field in this.attributes)
				this.makeFieldStatic(field)

		},

		makeFieldEditable: function(field) {

			var elm = this.$('password-list-item-field-' + title)

			elm.html()

		},

		makeFieldStatic: function(field) {

		},

		render: function() {

			var data = _.clone(this.model.attributes)

			this.$el.html(this.template(data))

			return this

		},

		bind: function() {

			this.model.on('remove', this.close)
			this.model.on('change', this.render)
			this.model.on('focus', this.focus)

		},

		unbind: function() {

			this.model.off('remove', this.close)
			this.model.off('change', this.render)
			this.model.off('focus', this.focus)

			this._super('unbind')

		}

	})

})