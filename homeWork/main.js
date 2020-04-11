let fontSize = 10;
let numElement = 1;



const  init = () =>{
const button = document.createElement('button');
const ul = document.createElement('ul');
document.body.appendChild(button);
document.body.appendChild(ul);
button.textContent="Dodaj kolejne 10 elementow";
button.addEventListener('click', createLiElements)
}






const  createLiElements = () =>{
console.log('dziala no a dlaczego ma nie dzialac');
const elementUl = document.querySelector('ul');
for(let i = 0;i<10;i++){
let newLi = document.createElement('li');
newLi.textContent=`element numer ${numElement}`;
elementUl.appendChild(newLi);
newLi.style.fontSize=`${fontSize}px`;
fontSize++;
numElement++;
}
}




init();