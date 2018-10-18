({
    doInit : function(component, event, helper) {
        return 1;
    },
    scriptsLoaded : function(component, event, helper) {
        console.log("Loading Sentry");
        Sentry.init({ dsn: 'https://e10bf877eebb4b6a90fc183e88d92bc6@sentry.io/1301507' });
        console.log("Loaded");
        return 1;
    }
})
