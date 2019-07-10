import React from 'react'
import Router from 'next/router'
import dynamic from 'next/dynamic'
import { withRouter } from 'next/router'

const is_server = !process.browser;

const DynamicComponent1 = dynamic({
  loader: () => new Promise((resolve) => {
    console.log('router not available', Router.router)
    const query = { component: 'hello1' };
    if (!is_server) {
      if (query.component === 'hello1') {
        console.log('route hello1');
      }
      if (query.component === 'hello2') {
        console.log('route hello2');
      }
    }
    resolve(import('../components/hello2'));
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