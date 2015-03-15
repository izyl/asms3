Ext.define('asms3.view.header.Header', {
	extend : 'Ext.panel.Panel',
	requires : [ 'asms3.view.header.HeaderController', 'asms3.view.header.HeaderModel', 'Ext.form.Panel', 'Ext.button.Button', 'Ext.form.field.Text',
			'Ext.form.field.ComboBox' ],

	// le xtype header est réservé
	xtype : 'asms3header',
	controller : 'asms3header',
	viewModel : 'asms3header',

	tbar : [ {
		// xtype: 'button', // default for Toolbars
		text : 'Dashboard'
	}, {
		xtype : 'splitbutton',
		text : 'New job',
		handler : function() {
			alert("The button was clicked");
		},
		menu : new Ext.menu.Menu({
			items : [
			// these will render as dropdown menu items when the arrow is clicked:
			{
				text : 'NS',
				listeners : {
					click : 'onNewJobNsClick'
				}
			}, {
				text : 'CAP',
				handler : function() {
					alert("Item 2 clicked");
				}
			} ]
		})
	},
	// begin using the right-justified button container
	'->', // same as { xtype: 'tbfill' }
	{
		xtype : 'textfield',
		name : 'field1',
		emptyText : 'search job'
	},
	// add a vertical separator bar between toolbar items
	'-', // same as {xtype: 'tbseparator'} to create Ext.toolbar.Separator
	'Welcome to ASMS 3', // same as {xtype: 'tbtext', text: 'text1'} to create Ext.toolbar.TextItem
	{
		xtype : 'tbspacer'
	},// same as ' ' to create Ext.toolbar.Spacer
	{
		xtype : 'tbtext',
		bind : {
			text : '{user.firstName} {user.lastName}'
		}
	}, {
		xtype : 'tbspacer',
		width : 50
	}, // add a 50px space
	{
		// xtype: 'button', // default for Toolbars
		text : 'Log off'
	} ]
});