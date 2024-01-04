const todoTitle=document.querySelector('#todoTitle')
//const isDone=document.querySelector('#isDone')
const form=document.querySelector('form')
const todoList=document.querySelector('ol')


const todosArray = [
{
    id: 1,
    Title: 'madds',
    isDone: true,
},
]


form.addEventListener('submit', function(evt){
    evt.preventDefault

    const todo={
        id: new Date().getTime(),
        Title: todoTitle.value,
        isDone: false,
    };

    todosArray.push(todo)

    console.log(todosArray)

    for (let i = 0; i < todosArray.length; i++) {
        const li = document.createElement('li')
        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'

        checkbox.checked = todosArray[i].isDone
        li.append(checkbox)
        li.innerHTML+=todosArray[i].todoTitle
        todoList.append(li)
        
    }
})