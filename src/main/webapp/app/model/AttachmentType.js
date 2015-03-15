// represente un coupe cle valeur, ce record est utilisé pour recuperer
// les types d'attachment
Ext.define('Asms2.model.AttachmentType', {
	extend : 'Ext.data.Model',
	idProperty : 'code',

	fields : [ {
		name : 'name',
		type : 'string',
	}, {
		name : 'code',
		type : 'string',
	} ],

	proxy : {
		type : 'ajax',
		url : 'attachmentTypes/list',
		idProperty : 'code',

		reader : {
			type : 'json',
			rootProperty : 'data',
			messageProperty : 'message',
			idProperty : 'code'
		}
	}
});