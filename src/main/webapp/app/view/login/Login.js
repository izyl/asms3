Ext.define('asms3.view.login.Login', {
	extend : 'Ext.window.Window',

	requires : [ 'asms3.view.login.LoginController',
			'asms3.view.login.LoginModel', 'Ext.form.Panel',
			'Ext.button.Button', 'Ext.form.field.Text',
			'Ext.form.field.ComboBox' ],

	controller : 'login',
	viewModel : 'login',

	bodyPadding : 10,
	title : 'Login to ASMS 3',
	closable : false,

	items : {
		xtype : 'form',
		reference : 'form',
		items : [ {
			xtype : 'textfield',
			name : 'username',
			bind : '{username}',
			fieldLabel : 'Username',
			allowBlank : false,
			enableKeyEvents : true,
			listeners : {
				specialKey : 'onSpecialKey'
			}
		}, {
			xtype : 'textfield',
			name : 'password',
			inputType : 'password',
			fieldLabel : 'Password',
			allowBlank : false,
			enableKeyEvents : true,
			cls : 'password',
			listeners : {
				specialKey : 'onSpecialKey'
			}
		}]
	},

	buttons : [ {
		text : 'Login',
		listeners : {
			click : 'onLoginClick'
		}
	} ]
});
