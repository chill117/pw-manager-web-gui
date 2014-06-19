var app = app || {}

$(function($) {

	'use strict'

	app.PasswordListItemView = Backbone.View.extend({

		tagName: 'tr',
		className: 'password-list-item',
		template: '#template-password-list-item',

		events: {
			'keyup input': 'startUpdateOnInputChangeTimer',
			'click .password-visibility-toggle': 'togglePasswordVisibility',
			'click .delete-password': 'confirmDelete'
		},

		initialize: function(options) {

			this.options = options || {}

			_.bindAll(this, 'close', 'render', 'focus', 'updateOnInputChange', 'togglePasswordVisibility', 'confirmDelete')

			this.template = _.template($(this.template).html())

			this.bind()

		},

		confirmDelete: function() {

			if (confirm('Are you sure you want to delete this password?'))
				this.model.destroy()

		},

		togglePasswordVisibility: function() {

			if (this.passwordIsVisible())
				this.hidePassword()
			else
				this.showPassword()

		},

		showPassword: function() {

			this.$fields.password.attr('type', 'text')
			this.$el.addClass('password-visible')

		},

		hidePassword: function() {

			this.$fields.password.attr('type', 'password')
			this.$el.removeClass('password-visible')

		},

		passwordIsVisible: function() {

			return this.$fields.password.attr('type') == 'text'

		},

		startUpdateOnInputChangeTimer: function(e) {

			clearTimeout(this._updateOnInputChangeTimer)

			this._updateOnInputChangeTimer = setTimeout(_.bind(this.updateOnInputChange, this, e), 100)

		},

		updateOnInputChange: function(e) {

			var inputElm = $(e.target)

			var field = inputElm.attr('name')
			var value = inputElm.val()

			if (value != this.model.get(field))
				this.model.set(field, value).save()

		},

		focus: function(field) {

			field || (field = 'title')

			this.$('input[name="' + field + '"]').focus()
			
		},

		render: function() {

			var data = _.clone(this.model.attributes)

			this.$el.html(this.template(data))

			this.$fields = {}

			for (var field in this.model.attributes)
				this.$fields[field] = this.$(':input[name="' + field + '"]')

			return this

		},

		bind: function() {

			this.model.on('remove', this.close)
			this.model.on('focus', this.focus)

		},

		unbind: function() {

			this.model.off('remove', this.close)
			this.model.off('focus', this.focus)

			this._super('unbind')

		}

	})

})