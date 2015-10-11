// Prevent flash of unstyled content
Meteor.startup(function() {
  Inject.rawModHtml('addUnresolved', function(html) {
    return html.replace('<body>', '<body unresolved>');
  });
});
