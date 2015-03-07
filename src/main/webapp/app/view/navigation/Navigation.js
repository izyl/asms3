Ext.define('asms3.view.navigation.Navigation', {
	extend : 'Ext.window.Window',
	xtype : 'navigation',
	requires : [ 'asms3.view.navigation.NavigationController', 'asms3.view.navigation.NavigationModel', 'Ext.form.Panel', 'Ext.button.Button',
			'Ext.form.field.Text', 'Ext.form.field.ComboBox' ],
	controller : 'navigation',
	viewModel : 'navigation',

	height : 200,
	width : 200,
	layout : 'fit',
	closable : false,

	bind : {
		title : '{navigationTitle}'
	},

	items : [ {
		xtype : 'treepanel',
		header : false,

		bind : {
			store : '{navigation}'
		},

		listeners : {
			select : 'onSelect'
		}
	} ]
});
