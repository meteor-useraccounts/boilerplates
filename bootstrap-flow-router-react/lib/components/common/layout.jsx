
MainLayout = React.createClass({
  render() {
    return (
      <div>
        <header>
          {this.props.nav || <Nav />}
        </header>
        <main>
          {this.props.content}
        </main>
        <footer>
          {this.props.footer || <Footer />}
        </footer>
      </div>
    );
  }
});
