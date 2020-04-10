const idButton = document.body.querySelector('button');
const idLiArray = [...document.body.querySelectorAll('ul>li')];

let px = 15;



function changeSize(){
    console.log(`it's working`);
    for(let i = 0; i < idLiArray.length; i++){
        idLiArray[i].style.display="block";
        idLiArray[i].style.fontSize=`${px}px`;
    }
    px++;  
}
idButton.addEventListener('click', changeSize);


// idButton.addEventListener('click', function() {
//     idLiArray.forEach( (item)=>{
//         item.style.display="block";
//         item.style.fontSize=`${px}px`;
//     })
//     px++; 
// });