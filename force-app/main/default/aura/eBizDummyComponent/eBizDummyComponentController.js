({
    doInit : function(component, event, helper) {
        console.log("Error");
        try {
            throw 'error test lighting';
        } catch (err) {
            Sentry.captureException(err);
        }
    }
})
