import { Component } from 'react'

class LifecycleDemo extends Component {
  componentDidMount() {
    console.log('LifecycleDemo mounted')
  }

  componentDidUpdate() {
    console.log('LifecycleDemo updated')
  }

  componentWillUnmount() {
    console.log('LifecycleDemo will unmount')
  }

  render() {
    return (
      <section className="lifecycle-demo">
        <h2>React Lifecycle Demo</h2>
        <p>
          This component demonstrates a React class component
          and its lifecycle methods.
        </p>
      </section>
    )
  }
}

export default LifecycleDemo