const valueBox = document.getElementById('number');
let number = valueBox.innerText;
const add = (object) =>{
    console.log(`${object}`)
    number = number*10;
    number = number + (Number(object.id));
    console.log(`${number}`);
    changeValue(number);
}
const changeValue = (number) => {
    valueBox.innerText = number;
}
const clearAll = () =>
{
    number = 0;
    console.log(number);
    changeValue(number);
}

const remove = () =>{
    number = number / 10;
    number = ~~number;
    changeValue(number);
}
const setToZero = () => {
    number = 0;
}

// console.log(Number(number));