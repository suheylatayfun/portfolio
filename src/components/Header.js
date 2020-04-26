import React from "react";

class Header extends React.Component {
  state = { isOpen: false };
  render() {
    return (
      <header className={this.state.isOpen ? "header-show" : "header-hide"}>
        <div
          class="navigation-mobile"
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
                this.setState({ isOpen: false });
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => {
                this.setState({ isOpen: false });
              }}
            >
              About{" "}
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={() => {
                this.setState({ isOpen: false });
              }}
            >
              Projects
            </a>
          </li>
        </ul>
      </header>
    );
  }
}
export default Header;
