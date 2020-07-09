//console.log(receipts)

class Receipt extends React.Component{
    render() {
        return (
            <div className="receipt">
            <h2>{this.props.receipt.person}</h2>
            <h5><span>Main: </span>{this.props.receipt.order.main}</h5>
            <h5><span>Protein: </span>{this.props.receipt.order.protein}</h5>
            <h5><span>Rice: </span>{this.props.receipt.order.rice}</h5>
            <h5><span>Sauce: </span>{this.props.receipt.order.sauce}</h5>
            <h5><span>Toppings: </span>{this.props.receipt.order.toppings.join(", ")}</h5>
            <h5><span>Drink: </span>{this.props.receipt.order.drink}</h5>
            <h5><span>Cost: </span>{this.props.receipt.order.cost}</h5>  
            <h5><span>Paid: </span>{this.props.receipt.paid}</h5>  
            </div>
        )
    }

}



class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        receipts: receipts,
        
        }       
        
    }


togglePaying = () => {
    this.setState({isPaid: !this.state.isPaid})
    console.log(this.state.isPaid)
}


    render() {
        return(
        <div>
            <h1 className="title">Korilla</h1>
            <div className="container"> 
            <button onClick={this.togglePaying}></button>
            {this.state.receipts.map(receipt => receipt.paid ? ' ' :  <Receipt receipt={receipt}/>)}
            </div>
        </div>
        )
    } 
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

