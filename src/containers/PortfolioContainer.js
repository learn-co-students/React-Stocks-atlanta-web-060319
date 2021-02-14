import React, { Component } from 'react';
import PortfolioCard from '../components/PortfolioCard'

class PortfolioContainer extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {this.props.boughtStocks.map(stock => <PortfolioCard stock={stock} sellStock={this.props.sellStock} />)}
      </div>
    );
  }

}

export default PortfolioContainer;
