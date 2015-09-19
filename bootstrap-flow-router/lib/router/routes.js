
FlowRouter.route('/', {
  name: "home",
  action: function(params, queryParams) {
    BlazeLayout.render('masterLayout', {
      footer: "footer",
      main: "home",
      nav: "nav",
    });
  }
});

FlowRouter.route('/private', {
  name: "private",
  // triggersEnter: [UserAccounts.ensureSignedIn],
  action: function(params, queryParams) {
    BlazeLayout.render('masterLayout', {
      footer: "footer",
      main: "private",
      nav: "nav",
    });
  }
});

FlowRouter.notFound = {
  action: function() {
    BlazeLayout.render('masterLayout', {
      footer: "footer",
      main: "pageNotFound",
      nav: "nav",
    });
  }
};

UserAccounts.flowrouting.configure({
  defaultLayout: 'masterLayout',
  defaultLayoutRegions: {
    nav: 'nav',
    footer: 'footer',
  },
  defaultContentRegion: 'main',
});

//Routes
UserAccounts.flowrouting.configureRoute('changePwd');
UserAccounts.flowrouting.configureRoute('forgotPwd');
UserAccounts.flowrouting.configureRoute('resetPwd');
UserAccounts.flowrouting.configureRoute('signIn');
UserAccounts.flowrouting.configureRoute('signUp');
UserAccounts.flowrouting.configureRoute('verifyEmail');
