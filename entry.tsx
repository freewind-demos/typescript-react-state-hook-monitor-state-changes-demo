import FunctionCounter from './functionCounter'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import ClassCounter from "./ClassCounter";

ReactDOM.render(
  <div>
    <div>
      <div>Function Counter which calls "printCounter" in multiple places</div>
      <FunctionCounter/>
    </div>
    <div>
      <div>Class Counter which calls "printCount" in just one place</div>
      <ClassCounter/>
    </div>
  </div>,
  document.body
)
