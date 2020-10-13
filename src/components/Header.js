import React from "react";

class Header extends React.Component {
  state = { isOpen: false, view: "" };
  render() {
    const { view } = this.state;
    return (
      <header className={this.state.isOpen ? "header-show" : "header-hide"}>
        <div
          className="navigation-mobile"
          onClick={() => {
            this.setState({ isOpen: !this.state.isOpen });
          }}
        >
          <div className="btn">
            <div className={this.state.isOpen ? "crossed" : "line"}></div>
            <div className={this.state.isOpen ? "crossed" : "line"}></div>
          </div>
        </div>
        <ul
          className={
            this.state.isOpen ? "navigation-links-mobile" : "navigation-links"
          }
        >
          <li>
            <a
              href="#home"
              onClick={() => {
                this.setState({ isOpen: false, view: "home" });
              }}
              className={view === "home" ? "selected" : null}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => {
                this.setState({ isOpen: false, view: "about" });
              }}
              className={view === "about" ? "selected" : null}
            >
              About
            </a>
          </li>
          {/* <li>
            <a
              href="#about"
              onClick={() => {
                this.setState({ isOpen: false });
              }}
            >
              Skills
            </a>
          </li> */}
          <li>
            <a
              href="#projects"
              onClick={() => {
                this.setState({ isOpen: false, view: "projects" });
              }}
              className={view === "projects" ? "selected" : null}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="mailto:rahimestayfun@gmail.com"
              rel="noopener noreferrer"
              title="email"
              onClick={() => {
                this.setState({ isOpen: false });
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </header>
    );
  }
}
export default Header;
