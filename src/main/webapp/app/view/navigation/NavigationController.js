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

	onSelect : function(treepanel, record, index, eOpts) {
		// bring selected view on top
		this.fireViewEvent('selectNode', this.getView(), record.text);
	}
});
