import React, { Component } from 'react'

class Twitter extends Component{

  render() {

    const posts = [{
      title: 'xpto',
      description: 'foo'
    },{
      title: 'xpto',
      description: 'foo'
    }]

    return (
      <Twitter posts={posts} />
    )

  }
}

export default Twitter;