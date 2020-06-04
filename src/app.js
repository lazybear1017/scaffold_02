import React from 'react'
import { Button } from 'antd'
import _ from 'lodash'
import './app.less'

export default class App extends React.Component {
  render () {
    console.log('熊程峰')
    return <>
      <h1 className='myapp'>App2</h1>
      <h3>{_.join(['x', 'c', 'f'], '，')}</h3>
      <Button type='primary'>按钮一</Button>
    </>
  }
}
