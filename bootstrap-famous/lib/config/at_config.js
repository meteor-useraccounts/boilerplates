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
    enablePasswordChange: true,
    showForgotPasswordLink: true,
/*
    overrideLoginErrors: true,
    sendVerificationEmail: true,
    confirmPassword: true,
    continuousValidation: false,
    showLabels: true,
    forbidClientAccountCreation: false,
    formValidationFeedback: true,
    homeRoutePath: '/',
    showAddRemoveServices: false,
    showPlaceholders: true,
*/
});

// Initialization
Meteor.startup(function(){
    AccountsTemplates.init();
});