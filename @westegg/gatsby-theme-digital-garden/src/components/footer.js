import React from "react"
const dayjs = require("dayjs")

const Footer = props => (
  <footer>
    <div>
      &copy; 2009-{dayjs().year()} <a href="http://adrw.xyz/">ADRW Digital</a> |{" "}
      <a href="http://andrew.fm">Andrew Paradi Alexander</a>
    </div>
  </footer>
)

export default Footer
