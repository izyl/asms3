/**
 * This class is the base class for all entities in the application.
 */
Ext.define('asms3.model.Base', {
	extend : 'Ext.data.Model',

	fields : [ {
		name : 'id',
		type : 'int'
	} ],

	schema : {
		namespace : 'asms3.model',
	}
});
