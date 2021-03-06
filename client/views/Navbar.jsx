/** @jsx React.DOM */

var Navbar = React.createClass({

  //TODO: refactor to handle cases when BGImage is or isn't showing. When it is present, make the navbar transparent and remove everything except the logo. When it isn't present, include links to other pages.
  render : function() {
    return (
      <nav className={this.props.bgImage ? "transparent navbar navbar-default" : "navbar navbar-default"}>
        <div className="container-fluid">
          <div className="navbar-header">
            <a href="/#/login" className="navbar-brand">
              <img src='/images/meal-kitchen-logo.png'></img>
            </a>
          </div>
          <div className={this.props.bgImage ? 'hide' : 'show navbar-right'}>
            <NavbarLinks linkHandler={this.props.linkHandler} logOut={this.props.logOut} />
          </div>
        </div>
      </nav>
    );
  }
});
