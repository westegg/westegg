import { Link } from "gatsby"
import React from "react"

import logo from "../img/cook.adrw.xyz-dark.svg"

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <Link to={"/"}>
            <img src={logo} alt="COOK.ADRW.XYZ" style={{ maxHeight: "10em" }} />
          </Link>
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-12">
                <h1 className={"has-text-white-ter"}>Cook More, Together</h1>
                &copy; 2009 – {new Date().getFullYear()} | Built on{" "}
                <a
                  className={"link has-text-white-ter"}
                  href="https://github.com/adrw/westegg"
                >
                  Westegg
                </a>{" "}
                by{" "}
                <a
                  className={"link has-text-white-ter"}
                  href="https://adrw.xyz"
                >
                  ADRW Digital
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
