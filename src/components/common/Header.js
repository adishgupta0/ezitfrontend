import "../../assets/css/header.css"
function Header() {
  var heightS = "";
  if (window.innerWidth < 600) {
    var heightS = "60px";
  }
  else{
    heightS ="100px";
  }

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img style={{height: heightS }} src="./assets/img/logo.PNG"></img>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse navItems" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">Services</a>
            </li>
            {/* <li className="nav-item">
        <a className="nav-link" href="#portfolio">Portfolio</a>
      </li> */}
            <li className="nav-item">
              <a className="nav-link" href="#team">Team</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#pricing">Pricing</a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>

          </ul>

        </div>
      </nav>

    </div>
  )
}
export default Header