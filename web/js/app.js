var app = app || {}

$(function($) {

	'use strict'

	// App starts here.
	// No routing necessary.. just initialize the password list view.

	var PasswordList = new app.PasswordListView()

	$('#app').append(PasswordList.el)

})