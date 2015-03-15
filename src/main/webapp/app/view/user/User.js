/**
 * This class defines the User editing view.
 */
Ext.define('asms3.view.user.User', {
	extend : 'Ext.window.Window',
	xtype : 'user',
	controller : 'user', // links to asms3.view.user.UserController
	requires : [ 'asms3.view.user.UserController', 'asms3.view.user.UserModel' ],
	viewmodel : 'user',
	
	height : 200,
	width : 200,
	closable : false,
	x : 500,
	bodyPadding : 10,
	layout : {
		type : 'vbox',
		align : 'stretch'
	},

	// As a Window the default property we are binding is "title":
	bind : 'User infos : {user.lastname} {user.firstname}',

	items : [ {
		xtype : 'label',
		fieldLabel : 'Last Name',
		labelWidth : 70,

		// As a textfield the default property we are binding is "value":
		bind : '{user.lastName}'
	}, {
		xtype : 'label',
		fieldLabel : 'First Name',
		labelWidth : 70,

		// As a textfield the default property we are binding is "value":
		bind : '{user.firstName}'
	}, {
		xtype : 'label',
		fieldLabel : 'Active qualifications',
		labelWidth : 70,

		// As a textfield the default property we are binding is "value":
		text : 'ns surveyor, ssom'
	} ],

	buttons : [ {
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
