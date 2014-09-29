// Set up login services
Meteor.startup(function() {
    // Remove configuration entries in case service is already configured
    ServiceConfiguration.configurations.remove({$or: [
        {service: "facebook"},
        {service: "github"},
        {service: "google"},
        {service: "linkedin"}
    ]});

    /*
    // Add Facebook configuration entry
    ServiceConfiguration.configurations.insert({
        "service": "facebook",
        "appId": "XXXXXXXXXXXXXXX",
        "secret": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    });

    // Add GitHub configuration entry
    ServiceConfiguration.configurations.insert({
        "service": "github",
        "clientId": "XXXXXXXXXXXXXXXXXXXX",
        "secret": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    });
*/

    // Add Google configuration entry
    ServiceConfiguration.configurations.insert({
        "service": "google",
        "clientId": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        "client_email": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        "secret": "XXXXXXXXXXXXXXXXXXXXXXXX"
    });

    /*
    // Add Linkedin configuration entry
    ServiceConfiguration.configurations.insert({
        "service": "linkedin",
        "clientId": "XXXXXXXXXXXXXX",
        "secret": "XXXXXXXXXXXXXXXX"
    });
    */
});