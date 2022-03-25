//getting the elements from HTML

let input = document.querySelector('.input');
let btn = document.querySelector('.btn');
let card = document.querySelector('.centerCard');



//adding event to the button, the event is click, and we need to pass in a function, getvalue()
btn.addEventListener('click', getValue)


//creating a function that gets the value of the input, and applying some conditions, case empty value is entered, an alert box pops out. Outside the condition I made an auto refresh data after the button is pressed


function getValue() {
//getting input


    if (input.value === '') { //if value is empty, alert box
        alert('please fill the field')
    } else { //else we get the input from the user


        let mainDiv = document.querySelector('.centerCard')


        //creating the div, then adding the class
        let secondDiv = document.createElement('div')
        secondDiv.classList.add('card')


        //creating the div, then adding the class
        let textInDiv = document.createElement('h4')
        textInDiv.classList.add('text');
        //getting the value introduced, then adding it to the h4
        let inputForH4 = document.createTextNode(input.value);



        //adding everything together, first the parent element, then the children
        mainDiv.appendChild(secondDiv)
        secondDiv.appendChild(textInDiv)
        textInDiv.appendChild(inputForH4)

    }

    //auto empty string
    input.value = '';


}




