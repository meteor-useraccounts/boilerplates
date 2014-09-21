

// Set up login services
Meteor.startup(function() {
  // Remove configuration entries in case service is already configured
  ServiceConfiguration.configurations.remove({
    $or: [{
      service: "facebook"
    }, {
  /*
      service: "github"
    }, {
  */
      service: "google"
    }, {
      service: "linkedin"
    }]
  });

  // Add Facebook configuration entry
  ServiceConfiguration.configurations.insert({
    "service": "facebook",
    "appId": "512068832232435",
    "secret": "ada85e91fd1ad2e60d0d25923eacd123"
  });

  // Add Google configuration entry
  ServiceConfiguration.configurations.insert({
    "service": "google",
    "clientId": "755514649356-f3b1l6u4a7tvn31eenomth890gvqaq4p.apps.googleusercontent.com",
    "client_email": "755514649356-f3b1l6u4a7tvn31eenomth890gvqaq4p@developer.gserviceaccount.com",
    "secret": "ymgZFtEve4OeYLRe8QhF3gIT"
  });

  // Add Facebook configuration entry
  ServiceConfiguration.configurations.insert({
    "service": "linkedin",
    "clientId": "77pa4mwww7hvmw",
    "secret": "v7fYiQMLUwqGwQTI"
  });

  /*
  // Local host versions...
  // Add Facebook configuration entry
  ServiceConfiguration.configurations.insert({
    "service": "facebook",
    "appId": "684907611568574",
    "secret": "12d420f0dc645f10fd65a53f6e2e49f9"
  });

  // Add GitHub configuration entry
  ServiceConfiguration.configurations.insert({
    "service": "github",
    "clientId": "2ba59a4f980145c4adfb",
    "secret": "6d2fca19cfc4ce612ce5f690f13770452df0d549"
  });

  // Add Google configuration entry
  ServiceConfiguration.configurations.insert({
    "service": "google",
    "clientId": "755514649356-r82bvrffrlfo4ndu5bqnd41jjoo66k8e.apps.googleusercontent.com",
    "client_email": "755514649356-r82bvrffrlfo4ndu5bqnd41jjoo66k8e@developer.gserviceaccount.com",
    "secret": "pRaKBHbRbLbA4GoiiRd-r1jj"
  });

  // Add Facebook configuration entry
  ServiceConfiguration.configurations.insert({
    "service": "linkedin",
    "clientId": "77epi2jitxjgus",
    "secret": "lmHaFUApnO3gkxkm"
  });
  */
});

