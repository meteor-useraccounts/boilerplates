
Nav = React.createClass({
  user() {
    return Meteor.user();
  },
  navLinks() {
    if (!Meteor.loggingIn() && Meteor.user()) {
      return (
        <ul className="nav navbar-nav pull-right">
          <li><a href="#profile">{this.user().emails[0].address}</a></li>
          <li><a href="/logout">Logout</a></li>
        </ul>
      );
    } else {
      return (
        <ul className="nav navbar-nav pull-right">
          <li><a href="/sign-in">Sign In</a></li>
          <li><a href="/sign-up">Sign Up</a></li>
        </ul>
      );
    }
  },
  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top" role="navigation">
        <div className="container">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <span className="navbar-brand">
                <img alt="UserAccounts" width="25" height="25" src="/imgs/ua-logo.png" />
              </span>
            </div>
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li><a href="/">Home</a></li>
                <li><a href="/private">Private</a></li>
              </ul>
              {this.navLinks()}
            </div>
          </div>
        </div>
      </nav>
    );
  }
});
