// record representant un JobAttachment, c'est lui qui est sauvegardé dans
// JobAttachmentPortlet

Ext.define('Asms2.model.Comment', {
	extend : 'Ext.data.Model',

	fields : [
			{
				name : 'code',
				type : 'int'
			},
			{
				name : 'description',
				type : 'string'
			},
			{
				type : 'date',
				name : 'creationDate'
			},
			{
				type : 'date',
				name : 'updateDate'
			},
			{
				name : 'uuid',
				type : 'string'
			} ],
			
	// un proxy sur le model permet d'appeler save() sur une instance d'attachment
	proxy : {
		type : 'ajax',
		api : {
			read : 'comments/list',
			create : 'comments/create',
			update : 'comments/update',
			destroy : 'comments/delete'
		},

		reader : {
			type : 'json',
			rootProperty : 'data',
			messageProperty : 'message',
			idProperty : 'code'
		},
		writer : {
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
			},

			'exception' : function(proxy, action, data, response, rs, options) {
				Ext.toast(jsonResponse.message ? jsonResponse.message : 'Server failure', jsonResponse.success ? 'success' : 'failure', 't');
			}
		}
	}

});