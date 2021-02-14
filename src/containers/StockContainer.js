import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.props.stocks.map(stock => <Stock stock={stock} buyStock={this.props.buyStock} />)}
      </div>
    );
  }

}

export default StockContainer;
