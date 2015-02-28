Ext.define('asms3.store.Navigation', {
	extend : 'Ext.data.TreeStore',
	model : 'asms3.model.NavigationNode',
	alias : 'store.navigation',

	proxy : {
		type : 'ajax',
		url : 'resources/data/navigation.json',
		reader : 'json'
	},

	root : {
		text : 'Root'
	}
});