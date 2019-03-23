import React from "react"
const dayjs = require("dayjs")

const Footer = class extends React.Component {
  render() {
    return (
      <footer class="footer">
        <div class="content has-text-centered">
          &copy; 2016-{dayjs().year()}{" "}
          <a href="http://suziealexander.com/">Suzie Alexander</a>
        </div>
      </footer>
    )
  }
}

export default Footer
