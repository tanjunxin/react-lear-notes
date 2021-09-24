import React, { Fragment } from 'react'
import Func from './Func/index'
import Child from './Func/child'
import funcStore from './Func/stores'
// import Cls from './Cls/index'
// import clsStore from './Cls/store'

// 父子传递只要和普通的props传递就行
function App() {
  return (
    <Fragment>
      <Func funcStore={funcStore} />
      <Child />
      {/* <Cls clsStore={clsStore} /> */}
    </Fragment>
  )
}

export default App