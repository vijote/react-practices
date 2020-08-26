import React from 'react';
import BoxForm from '../BoxForm/BoxForm';
import Box from '../Box/Box';
class BoxList extends React.Component{
    state={
        list:[]
    }
    addItem = (box) => {
        this.setState(state=> ({list:[...state.list, box]}));
    }
    deleteItem = (id) => {
        this.setState({list: this.state.list.filter(box=> box.id !==  id)});
    }
    render(){
        return(
            <div>
                <BoxForm submit={this.addItem}/>
                {this.state.list.map(
                    (item)=> <Box 
                                    key={item.id}
                                    color={item.color}
                                    width={item.width}
                                    height={item.height}
                                    delete={()=> this.deleteItem(item.id)}/>)}
            </div>
        )
    }
}

export default BoxList;