/**
 * This View Controller is associated with the Login view.
 */
Ext.define('asms3.view.login.LoginController', {
	extend : 'Ext.app.ViewController',
	alias : 'controller.login',

	loginText : 'Logging in...',

	onSpecialKey : function(field, e) {
		if (e.getKey() === e.ENTER) {
			this.doLogin();
		}
	},

	onLoginClick : function() {
		this.doLogin();
	},

	doLogin : function() {
		var form = this.lookupReference('form');

		if (form.isValid()) {
			this.getView().mask(this.loginText);

			if (!this.loginManager) {
				this.loginManager = new asms3.LoginManager({
					session : this.getView().getSession(),
					model : 'User'
				});
			}

			this.loginManager.login({
				data : form.getValues(),
				scope : this,
				success : 'onLoginSuccess',
				failure : 'onLoginFailure'
			});
		}
	},

	onLoginFailure : function(msg) {
		Ext.toast(msg, 'Login failed', 'tr');
		this.getView().unmask();
	},

	onLoginSuccess : function(user) {
		this.getView().unmask();
		this.fireViewEvent('login', this.getView(), user, this.loginManager);
	}
});
