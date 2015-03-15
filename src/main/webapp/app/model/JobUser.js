Ext.define('asms3.model.JobUser', {
	extend : 'asms3.model.Base',
	alias : 'JobUser',
	idProperty : 'id',

	fields : [ {
		name : 'id', // contains an uuid
		type : 'string'
	}, {
		name : 'user',
		reference : 'User'
	}, {
		name : 'jobFunction',
		reference : 'JobFunction'
	}, {
		name : 'surveys',
		reference : 'Survey'
	} ]

});