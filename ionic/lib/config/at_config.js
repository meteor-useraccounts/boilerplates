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
    positiveFeedback:true,

    texts: {
      socialIcons: {
        facebook: "icon ion-social-facebook",
        twitter: "icon ion-social-twitter",
        google: "icon ion-social-google",
        github: "icon ion-social-github",
        linkedin: "icon ion-social-linkedin",
        instagram: "icon ion-social-instagram"
      },
      inputIcons: {
        isValidating: "icon ion-load-d",
        hasSuccess: "icon ion-checkmark",
        hasError: "icon ion-close",
      }
    }
});
