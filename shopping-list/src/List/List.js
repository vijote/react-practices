import React from 'react';
import Item from '../Item/Item';
import './List.css';

class List extends React.Component {
    state = {
        product:"",
        qty:0,
        list:[]
    }

    handleChange = (evt) => {
        this.setState({[evt.target.name]:evt.target.value});
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        if(this.state.product!="" && this.state.qty!=0){
            let newList=this.state.list;
            newList.push({product: this.state.product, qty: this.state.qty});
            this.setState({list:newList, product:"", qty:0})
        }
    }
    completeTask = (id) => {
        console.log(id);
        let newList=this.state.list;
        newList.splice(id.id, 1);
        this.setState({list:newList});
    }
    addQty = () =>{
        this.setState({qty:this.state.qty+1});
    }
    substractQty = () =>{
        this.setState({qty:this.state.qty-1});
    }
    render(){
        return(
            <div className="List-container">
                <div className="List-header">
                    <h1 className="List-title">Shopping List</h1>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            name="product"
                            className="List-input-product"
                            type="text"
                            placeholder=" +  Add a product"
                            onChange={this.handleChange}
                            value={this.state.product}/>
                        <div className="List-qty-container">
                        <input
                            name="qty"
                            type="number"
                            onChange={this.handleChange}
                            value={this.state.qty}
                        />
                        <div className="List-qty-buttons">
                            <i class="fas fa-chevron-up" onClick={this.addQty}></i>
                            <i class="fas fa-chevron-down" onClick={this.substractQty}></i>
                        </div>
                        </div>
                        <button className="List-submit">Add</button>
                        
                    </form>
                    
                    
                </div>
                {this.state.list.map((item, id)=> <Item key={id} text={item.product} qty={item.qty} complete={()=> this.completeTask({id})}></Item>)}
            </div>
        )
    }
} 

export default List;