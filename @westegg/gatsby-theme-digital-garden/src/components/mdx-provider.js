import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import Player from 'react-player'

const components = {
  Video: props => (
    <Player
      {...props}
      css={{
        margin: 'auto',
        paddingBottom: '1.5rem'
      }}
    />
  ),
  wrapper: ({ children, className, ...props }) => (
    <div className={className}>{children}</div>
  ),
  'ol.li': props => (
    <li
      {...props}
      css={{
        marginBottom: '.5em',
        paddingLeft: '.5rem',
        lineHeight: 1.5
      }}
    />
  ),
  'ul.li': props => (
    <li
      {...props}
      css={{
        marginBottom: '.5em',
        paddingLeft: '.5rem',
        lineHeight: 1.5
      }}
    />
  ),
  img: props => <img {...props} css={{ maxWidth: '100%' }} />
}

export default ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
)
