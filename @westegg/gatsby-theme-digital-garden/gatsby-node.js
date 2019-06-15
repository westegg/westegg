const fs = require('fs-extra')
const crypto = require('crypto')
const path = require('path')

/**
 * Check that the folders used by source-filesystem plugin exist.
 * If they do not, they will be created.
 */
exports.onPreBootstrap = ({ store, reporter }) => {
  const { program } = store.getState()

  const dirs = [path.join(program.directory, 'static/img')]

  dirs.forEach(dir => {
    reporter.log(`ensure ${dir} directory present`)
    fs.ensureDirSync(dir)
  })
}

/**
 * Create type to handle options
 */
exports.sourceNodes = (
  { actions: { createTypes, createNode }, schema },
  {
    header = {
      home: {
        href: '/',
        label: 'Westegg Digital Garden'
      },
      links: [
        {
          href: '/notes',
          label: 'Themes'
        }
      ]
    },
    notes = 'notes',
    notesPath = '/notes',
    postsPath = '/blog',
    projects = 'projects',
    projectsPath = '/projects'
  }
) => {
  // HeaderLink type
  createTypes(`type WesteggHeaderLink implements Node {
href: String!
label: String!
}`)
  // Header type
  createTypes(`type WesteggHeader implements Node {
home: WesteggHeaderLink,
links: [WesteggHeaderLink]
}`)

  // Create the Westegg type to solidify the field data types
  createTypes(`type Westegg implements Node {
header: WesteggHeader!
notes: String
notesPath: String!
postsPath: String
projects: String
projectsPath: String
}`)

  // create westegg data from plugin config
  const westeggData = {
    header,
    notes,
    notesPath,
    postsPath,
    projects,
    projectsPath
  }

  createNode({
    ...westeggData,
    id: `@westegg/gatsby-theme-digital-garden-root`,
    parent: null,
    children: [],
    internal: {
      type: `Westegg`,
      contentDigest: crypto
        .createHash(`md5`)
        .update(JSON.stringify(westeggData))
        .digest(`hex`),
      content: JSON.stringify(westeggData),
      description: `Westegg Digital Garden Metadata`
    }
  })
}
