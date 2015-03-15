Ext.define('asms3.view.user.UserModel', {
	extend : 'Ext.app.ViewModel',

	alias : 'viewmodel.user',

	data : {
		user : {
			lastName : 'Brooks',
			firstName : 'Toby',
			qualifs : [ {
				name : 'ns surveyor'
			} ]
		}
	}
});