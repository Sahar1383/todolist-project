let inputElem = document.querySelector('input');
let todoUlELlem = document.querySelector('.main-ul');
let iconValue = document.querySelector('.icons');
let pValue = document.querySelector('p');

function addNewTodo(newTodoValue){
  let newTodoli = document.createElement('li')
  newTodoli.className = 'ul-item'

  let newTodoTitleSpan = document.createElement('span')
  newTodoTitleSpan.innerHTML = newTodoValue

  let newTodoImg = document.createElement('img')
  newTodoImg.className = 'icons'
  newTodoImg.src = 'icons/recycle.svg'

  newTodoImg.addEventListener('click', function(event){
    event.target.parentElement.remove()
  })

  newTodoli.append(newTodoTitleSpan, newTodoImg)
  todoUlELlem.append(newTodoli)

  console.log(newTodoli);
}

inputElem.addEventListener('keydown',function(event){
  let newTodoValue = event.target.value.trim();


  if(event.keyCode ===13 ){
    if(newTodoValue){
      inputElem.value = ''
      addNewTodo(newTodoValue)
    }
  }
})

