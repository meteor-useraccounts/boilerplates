Template.nav.helpers({
    signInOut: function(){
        var key = Meteor.user() ? 'signOut' : 'signIn';
        return T9n.get(key);
    }
});

Template.nav.events({
    'click #nav-signinout': function(event){
        console.log('click');
        if (Meteor.user())
            Meteor.logout();
        else
            Router.go('atSignIn');
    },
});