/**
 * This class is the main view for the application. It is specified in app.js as the "autoCreateViewport" property. That setting automatically applies the
 * "viewport" plugin to promote that instance of this class to the body element.
 * 
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('asms3.view.navigation.NavigationController', {
	extend : 'Ext.app.ViewController',

	requires : [ 'Ext.window.MessageBox' ],

	alias : 'controller.navigation',
	
	onSelect : function(reepanel, record, index, eOpts) {
		console.log('main select node ' + record);
		this.fireViewEvent('selectNode', this.getView(), record.text);
	}

});
