/**
 * This class is the viewport : the main view for the application. 
 */
Ext.define('asms3.view.main.MainController', {
	extend : 'Ext.app.ViewController',

	requires : [ 'Ext.window.MessageBox' ],

	currentView : null,
	views : new Ext.util.MixedCollection(),

	init : function() {

		this.getView().add([ {
			region : 'center',
			xtype : 'panel',

			tbar : [ {
				text : 'logoff'
			} ]

		}, {
			xtype : 'window',
			id : 'test',
			title : 'Hello',
			height : 200,
			width : 400,
			layout : 'fit',
			closeAction : 'hide',
			items : {
				xtype : 'navigation',
				ui : 'highlight-framed',
				margin : 10,
				bind : {
					title : '{name}'
				},
				region : 'west',
				width : 250,
				split : true,

				listeners : {
					scope : this,
					selectNode : 'onSelectNode'
				}
			}
		} ]);
		Ext.getCmp('test').show();
	},

	onSelectNode : function(node) {
		console.log('main select node ' + node);
	},

	showView : function(viewId) {
		console.log('show view ' + viewId);
		Ext.getCmp('test').show();
	},

	alias : 'controller.main'
});
