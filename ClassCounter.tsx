import React, {useState} from 'react'

type State = {
  count: number
}

export default class ClassCounter extends React.Component<any, State> {
  constructor(props: any) {
    super(props)
    this.state = {count: 0}
  }

  render() {
    const {count} = this.state;
    return <div>
      <p>You clicked {count} times</p>

      <button onClick={() => this.setState({count: count + 1})}>
        Click me +1
      </button>

      <button onClick={() => this.setState({count: count + 2})}>
        Click me +2
      </button>
    </div>
  }

  componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<State>, snapshot?: any): void {
    if (prevState.count != this.state.count) {
      printCount(this.state.count);
    }
  }
}


function printCount(count: number) {
  console.log("Count now: ", count)
}
