/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('asms3.view.navigation.NavigationModel', {
	extend : 'Ext.app.ViewModel',
	alias : 'viewmodel.navigation',

	stores : {
		navigation : {
			type : 'navigation',
			autoLoad : true
		}
	}

// TODO - add data, formulas and/or methods to support your view
});