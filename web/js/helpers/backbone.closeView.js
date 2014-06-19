Backbone.View.prototype.close = function() {
	this.unbind()
	this.remove()
}