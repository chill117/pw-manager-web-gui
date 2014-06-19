var app = app || {}

$(function($) {

	'use strict'

	$('html').removeClass('no-js')

	// App starts here.
	// No routing necessary.. just initialize the password list view.

	var PasswordList = new app.PasswordListView()

	$('#app').append(PasswordList.el)

})