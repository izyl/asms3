/**
 * This class defines the User editing view.
 */
Ext.define('asms3.view.user.User', {
	extend : 'Ext.window.Window',

	controller : 'user', // links to asms3.view.user.UserController

	width : 300,
	minHeight : 250,
	height : 450,
	bodyPadding : 10,
	layout : {
		type : 'vbox',
		align : 'stretch'
	},

	// As a Window the default property we are binding is "title":
	bind : 'Edit User: {theUser.name}',
	modal : true,

	items : [ {
		xtype : 'textfield',
		fieldLabel : 'Name',
		labelWidth : 70,

		// As a textfield the default property we are binding is "value":
		bind : '{theUser.name}'
	} ],

	buttons : [
	{
		text : 'Close',
		listeners : {
			// Call is routed to our ViewController
			// (asms3.view.user.UserController) but
			// the "closeView" method is a helper inherited from
			// Ext.app.ViewController.
			click : 'closeView'
		}
	} ]
});
