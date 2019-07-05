import React from 'react'
import SiteLayout from './site-layout'

export default props => {
  return (
    <SiteLayout>
      <div
        css={{
          display: 'flex',
          height: '30vh',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.5rem'
        }}
      >
        <h1>Media</h1>
      </div>
      <div
        data-id="wrapper"
        css={{
          '& > div > :not(pre)': {
            width: '38rem',
            marginLeft: 'auto',
            marginRight: 'auto'
          },
          '& code': {
            maxWidth: '38rem'
          }
        }}
      >
        {props.children}
      </div>
    </SiteLayout>
  )
}
