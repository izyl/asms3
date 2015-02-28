//we want to setup a model and store instead of using dataUrl
Ext.define('asms3.model.NavigationNode', {
	extend : 'Ext.data.TreeModel',
	alias : 'NavigationNode',
	fields : [ {
		name : "text",
		convert : undefined
	} ]

});