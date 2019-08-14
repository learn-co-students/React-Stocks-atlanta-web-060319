import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state = {
    stocks: [],
    boughtStocks: [],
    clicked: false
    
  }

  componentDidMount() {
    fetch("http://localhost:3008/stocks")
    .then(res => res.json())
    .then(data => {
      const stocks = data.map(stockObj => ({...stockObj, clicked: false}));
      this.setState({ stocks });

  })}

  buyStock=(myStock)=>{
    // console.log(myStock)
    //remove stock from stocks
    //add stock to boughtStocks
    //set state
    // let myStock.clicked = true
    let updatedStocks = this.state.stocks.filter(stock => myStock.id !== stock.id)
    this.setState({ boughtStocks: [...this.state.boughtStocks, myStock], stocks: updatedStocks, ...myStock, clicked: true })
    
  }

  sellStock=(boughtStock)=>{
    let updatedStocks = this.state.boughtStocks.filter(stock => boughtStock.id !== stock.id)
    this.setState({ stocks: [...this.state.stocks, boughtStock], boughtStocks: updatedStocks, ...boughtStock, clicked: false })
  }

  render() {
    return (
      <div>
        <SearchBar/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.stocks} buyStock={this.buyStock} />

            </div>
            <div className="col-4">

              <PortfolioContainer boughtStocks={this.state.boughtStocks} sellStock={this.sellStock} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
