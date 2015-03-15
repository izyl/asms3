Ext.define('asms3.view.header.HeaderController', {
	extend : 'Ext.app.ViewController',
	alias : 'controller.asms3header',

	init : function() {
		console.log('bla');
	},

	onLogoff : function() {
		console.log('Logging off asms3');
		Ext.toast(msg, 'Logging off asms3', 'tr');
	},

	onNewJobNsClick : function() {
		console.log('onNewJobNsClick');
		this.fireViewEvent('newJobNs', this.getView());
	}

});