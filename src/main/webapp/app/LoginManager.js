/**
 * This class manages the login process.
 */
Ext.define('asms3.LoginManager', {
	config : {
		/**
		 * @cfg {Class} model The model class from which to create the "user" record from the login.
		 */
		model : null,

		/**
		 * @cfg {Ext.data.Session} session
		 */
		session : null
	},

	constructor : function(config) {
		this.initConfig(config);
	},

	applyModel : function(model) {
		return model && Ext.data.schema.Schema.lookupEntity(model);
	},

	login : function(options) {
		Ext.Ajax.request({
			url : 'auth',
			jsonData : options.data,
			scope : this,
			callback : this.onLoginReturn,
			origin : options
		});
	},

	onLoginReturn : function(options, success, response) {

		var jsonResponse = Ext.decode(response.responseText);
		var session = this.getSession();

		if (jsonResponse.success) {
			Ext.callback(options.origin.success, options.origin.scope, Ext.create('User', options.jsonData));
			return;
		}

		Ext.callback(options.origin.failure, options.origin.scope, [jsonResponse.message]);
	}
});
