Ext.define('asms3.model.Timesheet', {
	extend : 'asms3.model.Base',
	idProperty : 'id',
	alias : 'Timesheet',

	fields : [ {
		name : 'overtime50',
		type : 'int'
	}, {
		name : 'ssomOvertime50',
		type : 'int'
	}, {
		name : 'travelTime',
		type : 'int'
	}, {
		name : 'ssomTravelTime',
		type : 'int'
	} ]
})