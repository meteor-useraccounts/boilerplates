Template.nav.helpers({
    signInOut: function(){
        var key = Meteor.user() ? 'signOut' : 'signIn';
        return T9n.get(key);
    }
});

Template.nav.events({
    'click #nav-signinout': function(event){
        console.log('click');
        Meteor.user() ? Meteor.logout() : Router.go('atSignIn');
    },
});