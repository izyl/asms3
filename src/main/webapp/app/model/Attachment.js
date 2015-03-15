Ext.define('Asms2.model.Attachment', {
	extend : 'Ext.data.Model',
	idProperty : 'code',

	// hasOne : [ {
	// model : 'AttachmentType',
	// associationKey : 'type',
	// foreignKey : 'code'
	// } ],

	fields : [
			{
				name : 'code',
				type : 'int',
				useNull : true
			},
			{
				name : 'ordre',
				type : 'int'
			},
			{
				name : 'description',
				type : 'string'
			},
			{
				name : 'fileName',
				type : 'string'
			},
			{
				name : 'electronic',
				type : 'bool'
			},
			{
				name : 'type',
				mapping : 'type.code',
				// persist : false
				serialize : function(value, rec) {

					var type = Ext.getStore('AttachmentTypes').getById(value);
					if (type) return type.data;

				}
			},
			{
				name : 'toSend',
				type : 'bool'
			},
			{
				type : 'date',
				name : 'generationDate'
			},
			{
				type : 'date',
				name : 'updateDate'
			},
			{
				name : 'uuid',
				type : 'string'
			} ],

	// le proxy est sur le model et pas sur le store afin de pouvoir appeler save() sur une instance d'attachment
	proxy : {
		type : 'ajax',
		api : {
			read : 'attachment/list',
			create : 'attachment/save',
			update : 'attachment/save',
			destroy : 'attachment/delete'
		},

		reader : {
			type : 'json',
			rootProperty : 'data',
			messageProperty : 'message',
			idProperty : 'code'
		},
		writer : {
			type : 'json',
			rootProperty : 'data',
			allowSingle : false,
			// ecrit systematiquement tous les champs pour recreer
			// l'objet
			// java en entier
			writeAllFields : true,
			expandData : true
		},

		listener : {

			'write' : function(proxy, action, data, response, rs, options) {
				Ext.toast(jsonResponse.message ? jsonResponse.message : 'Server failure', jsonResponse.success ? 'success' : 'failure', 't');
			}
		}
	}
});