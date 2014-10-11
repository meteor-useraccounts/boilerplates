Router.configure({
    layoutTemplate: 'masterLayout',
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

    this.route('private', {
        onBeforeAction: function(pause){
            console.log('private on onBeforeAction!');
            AccountsTemplates.ensureSignedIn.call(this, pause);
        },
    });
});