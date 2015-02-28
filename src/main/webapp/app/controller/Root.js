/**
 * This global controller manages the login view and ensures that view is created when
 * the application is launched. Once login is complete we then create the main view.
 */
Ext.define('asms3.controller.Root', {
    extend: 'Ext.app.Controller',
    
    requires: [
        'asms3.view.login.Login',
        'asms3.view.main.Main',
        'asms3.view.navigation.Navigation',
        'asms3.LoginManager'
    ],
    
    models: ['User', 'NavigationNode'],
    
    stores : ['Navigation'],
    
    loadingText: 'Loading...',
    
    onLaunch: function () {
        if (Ext.isIE8) {
            Ext.Msg.alert('Not Supported', 'This example is not supported on Internet Explorer 8. Please use a different browser.');
            return;
        }
        
        this.session = new Ext.data.Session({
            autoDestroy: false
        });

        this.login = new asms3.view.login.Login({
            session: this.session,
            autoShow: true,
            listeners: {
                scope: this,
                login: 'onLogin'
            }
        });
    },

    /**
     * Called when the login controller fires the "login" event.
     *
     * @param loginController
     * @param user
     * @param loginManager
     */
    onLogin: function (loginController, user, loginManager) {
        this.login.destroy();
        this.user = user;
        this.showUI();
    },
    
    showUI: function() {
        this.viewport = new asms3.view.main.Main({
            session: this.session,
            viewModel: {
                data: {
                    currentUser: this.user
                }
            }
        });
    },
    
    getSession: function() {
        return this.session;
    }
});
