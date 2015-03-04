Ext.define('asms3.view.navigation.Navigation', {
	extend : 'Ext.tree.Panel',
	xtype : 'navigation',

	requires : [ 'asms3.view.navigation.NavigationController', 'asms3.view.navigation.NavigationModel', 'Ext.form.Panel', 'Ext.button.Button',
			'Ext.form.field.Text', 'Ext.form.field.ComboBox' ],
	controller : 'navigation',
	viewModel : {
		type : 'navigation'
	},
	bind : {
		store : '{navigation}',
		title : '{name}'
	},

	listeners : {
		select : 'onSelect'
	},

	closable : false,
	
	ui : 'highlight',
	bodyCls : 'content-panel-body'
});
