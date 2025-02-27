let firstContainer = document.querySelector(".left-container")
let secondContainer = document.querySelector(".middle-container")
let thirdContainer = document.querySelector(".right-container")

let singleElement = document.querySelectorAll('.element')

let input = document.querySelectorAll('input')

let leftBtn = document.querySelector('.left')
let rightBtn = document.querySelector('.right')

leftBtn.disabled = true;
rightBtn.disabled = true;

secondContainer.addEventListener('click',function(event){
    
    if(event.target.tagName != 'BUTTON') return

    if(event.target.classList.contains('all-left')){
        allLeft()
    }else if(event.target.classList.contains('all-right')){
        allRight()
    }else if(event.target.classList.contains('left')){
        left()
    }else if(event.target.classList.contains('right')){
        right()
    }
})

function allLeft(){
     singleElement.forEach((ele)=>{
        firstContainer.append(ele)
     })
}

function allRight(){
    singleElement.forEach((ele)=>{
        thirdContainer.append(ele)
     })
}

function left(){
    thirdContainer.querySelectorAll('input').forEach((inp)=>{
        if(inp.checked){
             firstContainer.append(inp.parentElement)
             inp.checked = false
             
        }
    })
}

function right(){
    firstContainer.querySelectorAll('input').forEach((inp)=>{
        if(inp.checked){
             thirdContainer.append(inp.parentElement)
             inp.checked = false
        }
    })
    
}


function updateBtn() {
    let leftCheckboxes = firstContainer.querySelectorAll("input");
    let leftChecked = false;

    for (let i = 0; i < leftCheckboxes.length; i++) {
        if (leftCheckboxes[i].checked) {
            leftChecked = true;
            break;
        }
    }

    if (leftChecked) {
        rightBtn.disabled = false;
    } else {
        rightBtn.disabled = true;
    }

    let rightCheckboxes = thirdContainer.querySelectorAll("input");
    let rightChecked = false;

    for (let i = 0; i < rightCheckboxes.length; i++) {
        if (rightCheckboxes[i].checked) {
            rightChecked = true;
            break;
        }
    }


    if (rightChecked) {
        leftBtn.disabled = false;
    } else {
        leftBtn.disabled = true;
    }
}


document.addEventListener("change", function (event) {
    if (event.target.type === "checkbox") {
        updateBtn();
    }
})