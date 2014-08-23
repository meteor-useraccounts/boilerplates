//Routes
//AccountsTemplates.configureRoute('changePwd');
//AccountsTemplates.configureRoute('enrollAccount');
//AccountsTemplates.configureRoute('forgotPwd');
//AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');

// Options
/*
AccountsTemplates.configure({
    confirmPassword: true,
    continuousValidation: false,
    displayFormLabels: true,
    enablePasswordChange: false,
    forbidClientAccountCreation: false,
    formValidationFeedback: true,
    overrideLoginErrors: true,
    homeRoutePath: '/',
    sendVerificationEmail: false,
    showAddRemoveServices: false,
    showForgotPasswordLink: false,
    showPlaceholders: true,
});
*/

// Initialization
AccountsTemplates.init();
