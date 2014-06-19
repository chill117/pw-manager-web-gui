var app = app || {}

$(function($) {

	'use strict'

	app.PasswordListView = Backbone.View.extend({

		tagName: 'div',
		className: 'password-list',

		template: '#template-password-list',

		DataCollection: app.PasswordsCollection,
		ItemView: app.PasswordListItemView,

		events: {

			'click .password-list-action-menu-item.new-password': 'addNewPassword'

		},

		initialize: function(options) {

			this.options = options || {}

			_.bindAll(this, 'addItem', 'resetAllItems', 'updateEmptyClass', 'addNewPassword')

			this.collection = new this.DataCollection()
			this.template = _.template($(this.template).html())

			this.render()
			this.bind()

			this.collection.fetch()

		},

		addNewPassword: function() {

			var newPassword = this.collection.create()

			newPassword.trigger('focus')

		},

		render: function() {

			this.$el.html(this.template())

			this.$items = this.$('.password-list-items')

			this.resetAllItems()
			this.updateEmptyClass()

		},

		bind: function() {

			this.collection.on('all', function(eventName) {

				console.log('PasswordsCollection: ' + eventName)

			})

			this.collection.on('add', this.addItem)
			this.collection.on('sync', this.resetAllItems)
			this.collection.on('add remove sync', this.updateEmptyClass)

		},

		unbind: function() {

			this.collection.off('add', this.addItem)
			this.collection.off('sync', this.resetAllItems)
			this.collection.off('add remove sync', this.updateEmptyClass)

			this.collection.unbind()

			this._super('unbind')

		},

		addItem: function(model) {

			var view = new this.ItemView({model: model})

			this.$items.append(view.render().el)

		},

		resetAllItems: function() {

			this.$items.empty()

			for (var i in this.collection.models)
				this.addItem(this.collection.models[i])

		},

		updateEmptyClass: function() {

			if (!(this.collection.models.length > 0))
				this.$el.addClass('empty')
			else
				this.$el.removeClass('empty')

		}

	})

})