/**
 * This class is the main view for the application. That setting automatically applies the "viewport" plugin to promote that instance of this class to the body
 * element.
 */
Ext.define('asms3.view.main.Main', {
	extend : 'Ext.container.Viewport',
	requires : [ 'asms3.view.main.MainController', 'asms3.view.main.MainModel' ],
	xtype : 'app-main',
	controller : 'main',
	viewModel : {
		type : 'main'
	},

	layout : {
		type : 'border'
	},

	items : [ {
		region : 'north',
		xtype : 'asms3header'

	}, {
		xtype : 'navigation',
		autoShow : true,
		x : 0
	} ],

	ui : 'highlight',
	bodyCls : 'content-panel-body'
});
