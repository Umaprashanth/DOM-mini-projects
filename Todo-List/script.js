
const inputText = document.querySelector('.input-text')

const unorderedList = document.querySelector('ul')

const spanX = document.querySelector('span')


inputText.addEventListener('keyup', addingToTodo)

const allTodo = []


function addingToTodo(e){
    if (e.keyCode == 13 && e.target.value !== ''){
        let todo = {
            name : e.target.value,
            isDone : false
        }
        allTodo.push(todo)
        e.target.value = ''
    }
    createUI();
}



function createUI(){
    unorderedList.innerHTML= ""
    allTodo.forEach((todo) => {
        let li = document.createElement('li')
        let inputEle = document.createElement('input')
        inputEle.type = 'checkbox'
        inputEle.checked = todo.isDone
        let p = document.createElement('p')
        p.innerText = todo.name
        let span = document.createElement('span')
        span.innerText = 'X'

        li.append(
            inputEle,
            p,
            span
        )
        unorderedList.append(li)
    });
}

unorderedList.addEventListener("click", checkTodo)

function checkTodo(e){

    AllChildren = Array.from(e.target.parentElement.parentElement.children)
    let index = AllChildren.indexOf(e.target.parentElement)

    if (e.target.tagName == 'INPUT'){

        allTodo[index].isDone = e.target.checked

        strikeThrough(e)

    } else if(e.target.tagName == 'SPAN'){ 

        allTodo.splice(index, 1)
        
        createUI()
    }
}

function strikeThrough(e){
    
    let nextEle = e.target.nextSibling 

    if (nextEle && nextEle.tagName == 'P' && e.target.checked){
        nextEle.classList.add('strike-text')
    } else {
        nextEle.classList.remove('strike-text')
    }
    
}

