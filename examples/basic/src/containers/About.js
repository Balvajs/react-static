
import React from 'react'
import { withRouter } from 'react-static'
//

const about = ({ location: { pathname } }) => {
  console.log(pathname)
  return (
    <div>
      <h1>This is what we're all about.</h1>
      <p>React, static sites, performance, speed. It's the stuff that makes us tick.</p>
    </div>
  )
}

export default withRouter(about)
