//Routes
AccountsTemplates.configureRoute('signIn');

// Options
AccountsTemplates.configure({
    confirmPassword: true,
    continuousValidation: false,
    displayFormLabels: true,
    enablePasswordChange: false,
    homeRoutePath: '/',
    showAddRemoveServices: false,
    showForgotPasswordLink: false,
    showPlaceholders: true,
    //privacyUrl: '/privacyPolicy',
    //termsUrl: '/termsOfUse',
});


// Initialization
AccountsTemplates.init();


/*
AccountsTemplates.configureRoute('signIn', {
    name: 'atSignIn',
    path: '/signin',
    template: 'atForm',
    layoutTemplate: 'mainLayout',
    redirect: '/dashboard',
});

AccountsTemplates.configureRoute('signUp', {
    name: 'signup',
    path: '/signup',
    redirect: '/profile',
});

AccountsTemplates.configureRoute('changePwd');

AccountsTemplates.configureRoute('forgotPwd', {
    path: '/forgotpassword',
});





AccountsTemplates.addField({
    name: "username",
    type: "text",
    displayName: "username",
    required: true,
    minLength: 5,
});

AccountsTemplates.removeField('email');
AccountsTemplates.addField({
    name: 'email',
    type: 'email',
    required: true,
    displayName: "email",
    re: /.+@(.+){2,}\.(.+){2,}/,
    errStr: 'error.accounts.Invalid email',
});

AccountsTemplates.removeField('password');
AccountsTemplates.addField({
    name: 'password',
    type: 'password',
    required: true,
    minLength: 6,
    re: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,
    errStr: 'At least 1 digit, 1 lowercase and 1 uppercase',
});

AccountsTemplates.addField({
    name: 'name',
    type: 'text',
    displayName: "Full Name",
    //minLength: 5,
    //maxLength: 30,
    func: function(value){return value === 'Full Name';},
    errStr: 'Only "Full Name" allowed!',
});

AccountsTemplates.addField({
    name: 'phone',
    type: 'tel',
    displayName: "Phone",
    re: /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/,
    errStr: 'Invalid Phone number!',
});


AccountsTemplates.configure({
    confirmPassword: true,
    continuousValidation: true,
    displayFormLabels: true,
    enablePasswordChange: true,
    showAddRemoveServices: true,
    showPlaceholders: true,
    privacyUrl: '/privacyPolicy',
    termsUrl: '/termsOfUse',
});
*/


