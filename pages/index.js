import React from 'react'
import Router from 'next/router'
import dynamic from 'next/dynamic'

const DynamicComponent1 = dynamic({
  loader: () => new Promise((resolve) => {
    console.log(Router);
    resolve(import('../components/hello2'));
  }),
  loading: () => {
    console.log(Router);
    return <p>Loading caused by client page transition ...</p>;
  }
})

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <DynamicComponent1 />
      </div>
    )
  }
}
