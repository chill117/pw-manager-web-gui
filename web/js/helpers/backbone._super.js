Backbone.Model.prototype._super = function(funcName) {
	return this.__proto__.constructor.__super__[funcName].apply(this, _.rest(arguments))
}

Backbone.Collection.prototype._super = function(funcName) {
	return this.__proto__.constructor.__super__[funcName].apply(this, _.rest(arguments))
}

Backbone.View.prototype._super = function(funcName) {
	return this.__proto__.constructor.__super__[funcName].apply(this, _.rest(arguments))
}