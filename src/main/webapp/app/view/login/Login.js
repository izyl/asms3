Ext.define('asms3.view.login.Login', {
	extend : 'Ext.window.Window',

	requires : [ 'asms3.view.login.LoginController', 'asms3.view.login.LoginModel', 'Ext.form.Panel', 'Ext.button.Button', 'Ext.form.field.Text',
			'Ext.form.field.ComboBox' ],

	controller : 'login',
	viewModel : 'login',

	bodyPadding : 10,
	title : 'Login to ASMS 3',
	closable : false,
	width : 320,

	items : {
		xtype : 'form',
		reference : 'form',
		defaultType : 'textfield',

		items : [ {
			xtype : 'textfield',
			name : 'username',
			bind : '{username}',
			fieldLabel : 'Username',
			allowBlank : false,
			emptyText : 'username',
			enableKeyEvents : true,
			listeners : {
				specialKey : 'onSpecialKey'
			}
		}, {
			xtype : 'textfield',
			emptyText : 'password',
			name : 'password',
			inputType : 'password',
			fieldLabel : 'Password',
			allowBlank : false,
			enableKeyEvents : true,
			cls : 'password',
			listeners : {
				specialKey : 'onSpecialKey'
			}
		}, {
			xtype : 'checkbox',
			fieldLabel : 'Remember me',
			name : 'remember'
		} ]
	},

	buttons : [ {
		text : 'Register'
	}, {
		text : 'Login',
		listeners : {
			click : 'onLoginClick'
		}
	} ]
});
