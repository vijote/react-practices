const choice = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
}

const remove = (array, item) => {
    let newArray = [];
        for(let i=0; i<array.length;i++){
            if(array[i] === item){
                newArray = [...array.slice(0, i), ...array.slice(i+1)];
                return newArray.length;
            }  
        }
    }

export {choice, remove};