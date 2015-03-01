/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('asms3.view.main.Main', {
	extend: 'Ext.container.Viewport',
    requires: [
        'asms3.view.main.MainController',
        'asms3.view.main.MainModel'
    ],

    xtype: 'app-main',
    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    }
});
