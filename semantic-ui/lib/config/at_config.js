//Routes
//AccountsTemplates.configureRoute('changePwd');
//AccountsTemplates.configureRoute('enrollAccount');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');

// Options
AccountsTemplates.configure({
    showForgotPasswordLink: true,
    overrideLoginErrors: true,
    enablePasswordChange: true,
/*
    confirmPassword: true,
    continuousValidation: false,
    displayFormLabels: true,
    forbidClientAccountCreation: false,
    formValidationFeedback: true,
    homeRoutePath: '/',
    sendVerificationEmail: false,
    showAddRemoveServices: false,
    showPlaceholders: true,
*/
});

// Initialization
AccountsTemplates.init();
