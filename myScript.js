const valueBox = document.getElementById('number');
let stack = new Stack();
let number = String(valueBox.innerText);
const add = (object) =>{
    console.log(`${object}`)
    if(number === "0")
    {
        number = object.id;        
    }
    else
    {
        number = number.concat(object.id);
    }
        
    console.log(`${number}`);
    changeValue(number);
}
const changeValue = (number) => {
    valueBox.innerText = number;
}
const clearAll = () =>
{
    number = "0";
    console.log(number);
    changeValue(number);
}

const remove = () =>{
    if(number.length === 1)
    {
        number = "0";
    }
    else
    {
        number = number.slice(0,-1);
    }
    changeValue(number);
}
const setToZero = () => {
    number = 0;
}
const addSign = (object) => {
    console.log(`${object.id}`);
    let sign = String(object.id);
    switch (sign) {        
        case "add":
            number=number.concat("+");            
            console.log(`${number}`);
            break;
        case "minus":
            number=number.concat("-");
            break;
        case "multiply":
            number=number.concat("x");
            break;
        case "divide":
            number=number.concat("/");
            break;
        case "dot":
            number=number.concat(".");
            break;
    }
    changeValue(number);
}

// console.log(Number(number));