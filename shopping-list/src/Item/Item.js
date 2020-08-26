import React from 'react';
import './Item.css';
class Item extends React.Component{
    render(){
        return(
            <div className="Item">
                <div className="Item-text-container">
                    <p className="Item-product">{this.props.text}</p>
                    <p className="Item-qty">{this.props.qty} Units</p>
                </div>
                <button
                    className="Item-button"
                    onClick={this.props.complete}>
                    <i class="fas fa-check"></i>
                </button>
            </div>
        )
    }
}
export default Item;