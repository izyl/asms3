Ext.define('asms3.view.header.Header', {
	extend : 'Ext.panel.Panel',
	requires : [ 'asms3.view.header.HeaderController', 'asms3.view.header.HeaderModel', 'Ext.form.Panel', 'Ext.button.Button', 'Ext.form.field.Text',
			'Ext.form.field.ComboBox' ],
			
	// le xtype header est réservé 
	xtype : 'asms3header',
	controller : 'asms3header',
	viewModel : 'asms3header',
	
	style : {
		backgroundColor : '#00208B'
	},

	tbar : [ {
		// xtype: 'button', // default for Toolbars
		text : 'Button'
	}, {
		xtype : 'splitbutton',
		text : 'Split Button'
	},
	// begin using the right-justified button container
	'->', // same as { xtype: 'tbfill' }
	{
		xtype : 'textfield',
		name : 'field1',
		emptyText : 'search project'
	},
	// add a vertical separator bar between toolbar items
	'-', // same as {xtype: 'tbseparator'} to create Ext.toolbar.Separator
	'text 1', // same as {xtype: 'tbtext', text: 'text1'} to create Ext.toolbar.TextItem
	{
		xtype : 'tbspacer'
	},// same as ' ' to create Ext.toolbar.Spacer
	'text 2', {
		xtype : 'tbspacer',
		width : 50
	}, // add a 50px space
	'text 3' ]
});