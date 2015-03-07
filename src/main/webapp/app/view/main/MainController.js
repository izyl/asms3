/**
 * This class is the viewport : the main view for the application.
 */
Ext.define('asms3.view.main.MainController', {
	extend : 'Ext.app.ViewController',

	requires : [ 'Ext.window.MessageBox' ],

	currentView : null,
	views : new Ext.util.MixedCollection(),

	init : function() {
		console.log('init main');
	},

	showView : function(viewId) {
		console.log('show view ' + viewId);
		Ext.getCmp('test').show();
	},

	alias : 'controller.main'
});
