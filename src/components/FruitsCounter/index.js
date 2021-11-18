import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {
    count: 0,
    count2: 0,
  }

  onMango = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  onBanana = () => {
    this.setState(prevState => ({count2: prevState.count2 + 1}))
  }

  render() {
    const {count, count2} = this.state

    return (
      <div className="main-container">
        <div className="sub-container ">
          <h1 className="heading">
            Bob ate <span className="count">{count}</span> mangoes
            <span className="count"> {count2}</span> bananas
          </h1>
          <div className="con">
            <div className="fruits-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="img"
              />
              <button type="button" className="button" onClick={this.onMango}>
                Eat Mango
              </button>
            </div>
            <div className="fruits-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="img"
              />
              <button type="button" className="button" onClick={this.onBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
