import React from 'react'
import Router from 'next/router'
import dynamic from 'next/dynamic'
import { withRouter } from 'next/router'

const is_server = !process.browser;

const DynamicComponent1 = dynamic({
  loader: () => new Promise((resolve) => {
    setTimeout(() => {
      resolve(import('../components/hello2'));
    }, 2000)
  }),
  loading: () => {
    // if (!is_server) {
    console.log(Router);
    const { pathname, query, asPath } = Router;
    return <p>Loading page {pathname} ...</p>;
    // }
    // return <p>Loading page ...</p>;
  },
  ssr: false
})

class Index extends React.Component {
  render () {
    const { pathname, query, asPath } = this.props.router
    console.log(pathname, query, asPath)
    return (
      <div>
        <DynamicComponent1 />
      </div>
    )
  }
}

export default withRouter(Index);