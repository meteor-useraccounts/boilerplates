
// Options
AccountsTemplates.configure({
  defaultLayoutType: 'blaze-to-react',
  defaultTemplate: 'fullPageAtForm',  // default
  defaultLayout: MainLayout,
  defaultContentRegion: 'content',
  defaultLayoutRegions: {
      nav: <Nav />,
      footer: <Footer />
  },

  enablePasswordChange: true,
  showForgotPasswordLink: true,

  // sendVerificationEmail: true,
  // enforceEmailVerification: true,
  // confirmPassword: true,
  // continuousValidation: false,
  // displayFormLabels: true,
  // forbidClientAccountCreation: true,
  // formValidationFeedback: true,
  // homeRoutePath: '/',
  // showAddRemoveServices: false,
  // showPlaceholders: true,

  // negativeValidation: true,
  // positiveValidation: true,
  // negativeFeedback: false,
  // positiveFeedback: true,

  // Privacy Policy and Terms of Use
  // privacyUrl: 'privacy',
  // termsUrl: 'terms-of-use',
});
