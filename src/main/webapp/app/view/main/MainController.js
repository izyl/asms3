/**
 * This class is the main view for the application. It is specified in app.js as the "autoCreateViewport" property. That setting automatically applies the
 * "viewport" plugin to promote that instance of this class to the body element.
 * 
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('asms3.view.main.MainController', {
	extend : 'Ext.app.ViewController',

	requires : [ 'Ext.window.MessageBox' ],

	currentView : null,
	views : new Ext.util.MixedCollection(),

	init : function() {

		this.getView().add([ {
	        xtype: 'navigation',
	        ui: 'highlight-framed',
	        margin : 10,
	        bind: {
	            title: '{name}'
	        },
	        region: 'west',
	        width: 250,
	        split: true
		}, {
			region : 'center',
			xtype : 'tabpanel',
			items : [ {
				title : 'Tab 1',
				padding : 10,
				html : '<h2>Content appropriate for the current navigation.</h2>'
			} ]
		} ]);

	},

	showView : function(viewId) {
		var view = views.get(requestedViewId);
		if (Ext.isEmpty(view)) {
			views.put(viewId, createView(viewId));
		}
		view.setVisible(true);
	},

	alias : 'controller.main'
});
