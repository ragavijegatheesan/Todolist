let button=document.getElementById('add');
let todolist=document.getElementById('todolist');
let input=document.getElementById('input');

//for storing todo values in local storage
let todos=[];
window.onload=()=>{
   todos= JSON.parse(localStorage.getItem('todos')) || []
   todos.forEach(todo=>addtodo(todo))
    
   }
   


button.addEventListener('click', ()=>{

    todos.push(input.value)
     //store todo values in localstorage

     localStorage.setItem('todos', JSON.stringify(todos))
    console.log(todos)
    addtodo(input.value)
    input.value=''
})
//add values in todolist
function addtodo(todo){
    let para = document.createElement('p');
    para.innerText=todo;
    todolist.appendChild(para);
   

    para.addEventListener('click', ()=>{
         para.style.textDecoration='line-through'
         remove(todo)

    })
    para.addEventListener('dblclick', ()=>{
        todolist.removeChild(para)
        remove(todo)

   })

}
//removefunction
function remove(todo){
    let index=todos.indexOf(todo)
    if(index>-1){
        todos.splice(index,1)
    }
    localStorage.setItem('todos', JSON.stringify(todos))
}