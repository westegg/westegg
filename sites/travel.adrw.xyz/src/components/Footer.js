import React from "react"
const dayjs = require("dayjs")

const Footer = class extends React.Component {
  render() {
    return (
      <footer class="footer">
        <div class="content has-text-centered">
          &copy; 2009-{dayjs().year()}{" "}
          <a href="http://adrw.xyz/">ADRW Digital</a> |{" "}
          <a href="http://andrew.fm">Andrew Paradi Alexander</a>
        </div>
      </footer>
    )
  }
}

export default Footer
