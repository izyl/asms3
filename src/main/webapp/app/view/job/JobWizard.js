/**
 * This class defines the Job editing view.
 */
Ext.define('asms3.view.job.JobWizard', {
	extend : 'Ext.window.Window',
	xtype : 'jobwizard',
	controller : 'job', // links to asms3.view.job.JobController
	viewModel : 'job',
	requires : [ 'asms3.view.job.JobForm', 'asms3.view.job.JobController', 'asms3.view.job.JobModel' ],

	height : 600,
	width : 800,
	x : 400,
	layout : {
		type : 'border'
	},
	closeAction : 'hide',
	scrollable : true,

	// As a Window the default property we are binding is "title":
	bind : 'Create a new job',

	items : [ {

		xtype : 'navigation',
		autoShow : true,
		x : 0,
		region : 'west',
		margin : '0 5 0 0' 
	}, {
		xtype : 'jobForm',
		region : 'center',
		bind : '{job.number}'
	} ],

	tools : [ {
		type : 'help'
	}, {
		type : 'print'
	}, {
		type : 'minimize'
	}, {
		type : 'maximize'
	}, {
		type : 'restore'
	} ],

	buttons : [ {
		text : 'Toggle Enabled',
		handler : function() {
			this.up('form').items.each(function(item) {
				item.setDisabled(!item.disabled);
			});
		}
	}, {
		text : 'Reset Form',
		handler : function() {
			Ext.getCmp('form-widgets').getForm().reset();
		}
	}, {
		text : 'Validate',
		handler : function() {
			Ext.getCmp('form-widgets').getForm().isValid();
		}
	} ]
});
