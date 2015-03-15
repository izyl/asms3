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

	onShowView : function(viewId) {
		console.log('show view ' + viewId);
		this.lookupReference(viewId).show();
	},

	onNewJobNs : function() {
		console.log('showJobWizard');
		this.lookupReference('jobNsWizard').show();
	},

	alias : 'controller.main'
});
