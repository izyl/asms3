Ext.define('asms3.store.Job', {
	extend : 'Ext.data.TreeStore',
	model : 'asms3.model.NavigationNode',
	alias : 'store.job',

	proxy : {
		type : 'ajax',
		url : 'resources/data/navigation.json',
		reader : 'json'
	},

	root : {
		text : 'Root'
	}
});