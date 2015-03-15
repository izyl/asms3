Ext.define('asms3.view.job.JobForm', {
	extend : 'Ext.form.Panel',
	xtype : 'jobForm',
	title : 'Simple Form',
	bodyPadding : '10 20',

	// The form will submit an AJAX request to this URL when submitted
	url : 'save-form.php',
	scrollable : true,
	
	// Fields will be arranged vertically, stretched to full width
	layout : 'anchor',
	defaults : {
		anchor : '98%',
		msgTarget : 'side',
		allowBlank : false
	},
	
	header : false,

	// The fields
	defaultType : 'textfield',
	
	items : [ {
		xtype : 'label',
		text : 'Plain Label'
	}, {
		fieldLabel : 'TextField',
		xtype : 'textfield',
		name : 'someField',
		emptyText : 'Enter a value'
	}, {
		fieldLabel : 'ComboBox',
		xtype : 'combo',
		store : [ 'Foo', 'Bar' ]
	}, {
		fieldLabel : 'DateField',
		xtype : 'datefield',
		name : 'date'
	}, {
		fieldLabel : 'TimeField',
		name : 'time',
		xtype : 'timefield'
	}, {
		fieldLabel : 'NumberField',
		xtype : 'numberfield',
		name : 'number',
		emptyText : '(This field is optional)',
		allowBlank : true
	}, {
		fieldLabel : 'TextArea',
		xtype : 'textareafield',
		name : 'message',
		cls : 'x-form-valid',
		value : 'This field is hard-coded to have the "valid" style (it will require some code changes to add/remove this style dynamically)'
	}, {
		fieldLabel : 'Checkboxes',
		xtype : 'checkboxgroup',
		columns : [ 100, 100 ],
		items : [ {
			boxLabel : 'Foo',
			checked : true,
			id : 'fooChk',
			inputId : 'fooChkInput'
		}, {
			boxLabel : 'Bar'
		} ]
	}, {
		fieldLabel : 'Radios',
		xtype : 'radiogroup',
		columns : [ 100, 100 ],
		items : [ {
			boxLabel : 'Foo',
			checked : true,
			name : 'radios'
		}, {
			boxLabel : 'Bar',
			name : 'radios'
		} ]
	}, {
		hideLabel : true,
		id : 'htmleditor',
		xtype : 'htmleditor',
		name : 'html',
		enableColors : false,
		value : 'Mouse over toolbar for tooltips.<br /><br />The HTMLEditor IFrame requires a refresh between a stylesheet switch to get accurate colors.',
		height : 110
	}, {
		xtype : 'fieldset',
		title : 'Plain Fieldset',
		items : [ {
			hideLabel : true,
			xtype : 'radiogroup',
			items : [ {
				boxLabel : 'Radio A',
				checked : true,
				name : 'radiogrp2'
			}, {
				boxLabel : 'Radio B',
				name : 'radiogrp2'
			} ]
		} ]
	}, {
		xtype : 'fieldset',
		title : 'Collapsible Fieldset',
		collapsible : true,
		items : [ {
			xtype : 'checkbox',
			boxLabel : 'Checkbox 1'
		}, {
			xtype : 'checkbox',
			boxLabel : 'Checkbox 2'
		} ]
	}, {
		xtype : 'fieldset',
		title : 'Checkbox Fieldset',
		checkboxToggle : true,
		items : [ {
			xtype : 'radio',
			boxLabel : 'Radio 1',
			name : 'radiongrp1'
		}, {
			xtype : 'radio',
			boxLabel : 'Radio 2',
			name : 'radiongrp1'
		} ]
	} ]


});
