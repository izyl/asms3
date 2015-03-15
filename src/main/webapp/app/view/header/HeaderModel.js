Ext.define('asms3.view.header.HeaderModel', {
	extend : 'Ext.app.ViewModel',
	alias : 'viewmodel.asms3header',

	// Just some data to seed the process. This might be pulled from a cookie or
	// other
	// in a real app.
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