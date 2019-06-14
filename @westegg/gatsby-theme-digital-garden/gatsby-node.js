const fs = require("fs-extra")
const path = require("path")

/* Check that the folders used by source-filesystem plugin exist.
 * If they do not, they will be created.
 */

exports.onPreBootstrap = ({ store, reporter }) => {
  const { program } = store.getState()

  const dirs = [
    path.join(program.directory, "src/img"),
    path.join(program.directory, "static/img")
  ]

  dirs.forEach(dir => {
    reporter.log(`ensure ${dir} directory present`)
    fs.ensureDirSync(dir)
  })
}
