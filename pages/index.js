import React from 'react'
import Router from 'next/router'
import dynamic from 'next/dynamic'
import { withRouter } from 'next/router'

const is_server = !process.browser;

const DynamicComponent1 = dynamic({
  loader: () => new Promise((resolve) => {
    console.log('router not available', Router.router)
    setTimeout(() => {
      resolve(import('../components/hello2'));
    }, 2000)
  }),
  loading: () => {
    console.log('router not available', Router.router)
    return <>loading</>
  },
})

class Index extends React.Component {
  render () {
    // const { pathname, query, asPath } = this.props.router
    console.log('router is available', Router.router);
    return (
      <div>
        <DynamicComponent1 />
      </div>
    )
  }
}

export default withRouter(Index);