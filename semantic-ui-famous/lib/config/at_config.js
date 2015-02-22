//Routes
AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('enrollAccount');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('verifyEmail');

// Options
AccountsTemplates.configure({
    //defaultLayout: 'emptyLayout',
    showForgotPasswordLink: true,
    overrideLoginErrors: true,
    enablePasswordChange: true,
    sendVerificationEmail: false,

    //enforceEmailVerification: true,
    //confirmPassword: true,
    //continuousValidation: false,
    //displayFormLabels: true,
    //forbidClientAccountCreation: false,
    //formValidationFeedback: true,
    //homeRoutePath: '/',
    //showAddRemoveServices: false,
    //showPlaceholders: true,

    negativeValidation: true,
    positiveValidation:true,
    negativeFeedback: false,
    positiveFeedback:false,

    // Privacy Policy and Terms of Use
    //privacyUrl: 'privacy',
    //termsUrl: 'terms-of-use',
});


var Transform;
var Transitionable;
var Easing;
if (Meteor.isClient){
    FView.ready(function(require) {
        Transform = famous.core.Transform;
        Transitionable = famous.transitions.Transitionable;
        Easing = famous.transitions.Easing;
    });
}

var slideLeftDestroy = function(fview){
    fview.modifier.setTransform(
        Transform.translate(-$(window).width(),0),
        { duration : 250, curve: Easing.easeOutSine },
        function() { fview.destroy();}
    );
};


AccountsTemplates.configureAnimations({
    destroy: {
        atSignupLink: slideLeftDestroy,
    },
});
