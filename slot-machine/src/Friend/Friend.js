import React from 'react';

class Friend extends React.Component {
    static defaultProps = {
         hobbies: ['myHobbie'],
         name: 'myName'

    }
    
    render(){
        const {name, hobbies} = this.props;
        return(
            
            <div>
                <p>Hi! my name is: {name}, and i like</p>
                <ul>{hobbies.map(h => <li>{h}</li>)}</ul>
            </div>
        )
    }
    
}

export default Friend;