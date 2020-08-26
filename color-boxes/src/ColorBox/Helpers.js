const generateRandom = () => {
    const randomRed = Math.floor(Math.random()*256);
    const randomGreen = Math.floor(Math.random()*256);
    const randomBlue = Math.floor(Math.random()*256);
    const randomColor = 'rgb('+randomRed+', '+randomGreen+', '+randomBlue+')';
    console.log(randomColor);
    return randomColor;
}

const generateColors = () => {
    const newArray = [];
    for (let i=0;i<6;i++){
        newArray.push(generateRandom());
    }
    return newArray;
}

const pickColor = (arr) => {
    const rand = Math.floor(Math.random()*arr.length);
    return arr[rand];
}

export {generateColors, pickColor};