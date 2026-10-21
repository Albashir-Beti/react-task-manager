
import { Component } from 'react'

class LifecycleDemo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
    }
  }

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
        <p>Count: {this.state.count}</p>

        <button
          type="button"
          onClick={() =>
            this.setState((prevState) => ({
              count: prevState.count + 1,
            }))
          }
        >
          Increase Count
        </button>
      </section>
    )
  }
}

export default LifecycleDemo
