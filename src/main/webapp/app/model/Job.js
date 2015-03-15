Ext.define('asms3.model.Job', {
	extend : 'asms3.model.Base',
	alias : 'Job',
	idProperty : 'number',

	fields : [ 'number', {
		name : 'startDate',
		type : 'date'
	}, {
		name : 'endDate',
		type : 'date'
	}, 'type', {
		name : 'jobUsers',
		reference : 'JobUser'
	}, {
		name : 'attachments',
		reference : 'Attachment'
	}, {
		name : 'reports',
		reference : 'Attachment'
	}, {
		name : 'timesheet',
		reference : 'Timesheet'
	}, {
		name : 'comments',
		reference : 'Comment'
	} ],

	validators : {
		type : {
			type : 'inclusion',
			list : [ 'NS', 'CAP' ]
		},
		username : [ {
			type : 'exclusion',
			list : [ 'Admin', 'Operator' ]
		}, {
			type : 'format',
			matcher : /([a-z]+)[0-9]{2,3}/i
		} ]
	}

});
