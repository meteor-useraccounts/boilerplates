/*
Router.configure({
    layoutTemplate: 'masterLayout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'pageNotFound',
    yieldTemplates: {
        nav: {to: 'nav'},
        footer: {to: 'footer'},
    }
});

Router.map(function() {
    this.route('home', {
        path: '/',
    });

    this.route('private');
});

Router.plugin('ensureSignedIn', {
  only: ['private']
});
*/

FlowRouter.route('/', {
    action: function(params, queryParams) {
        BlazeLayout.render('masterLayout', {
          footer: "footer",
          main: "home",
          nav: "nav",
        });
    },
    name: "home"
});

FlowRouter.route('/private', {
    action: function(params, queryParams) {
        BlazeLayout.render('masterLayout', {
          footer: "footer",
          main: "private",
          nav: "nav",
        });
    },
    name: "private"
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
