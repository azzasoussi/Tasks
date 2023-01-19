let button = document.querySelector("button");
let liste = document.querySelector("ul");
let input = document.querySelector("input");

document

button.addEventListener("click", addTodo);
let i=0;
function addTodo() {
  i++;
  let li=document.createElement('li'); 
  li.id=`${i}`;
  liste.append(li);

  let checkbox=document.createElement('input');
  checkbox.type='checkbox';
  li.append(checkbox);
  checkbox.setAttribute('id',`${i}`)
  checkbox.addEventListener("click",check);

  let span=document.createElement('span')
  span.innerHTML=input.value;
  li.append(span);

  let deletebtn=document.createElement('button');
  deletebtn.innerText='delete';
  deletebtn.setAttribute('id',`${i}`);
  li.append(deletebtn);
  deletebtn.onclick=deleteTodo;
  }

  function deleteTodo(e){
  let id=e.target.id;
  document.getElementById(id).remove();
  erase();
  }

  function check(e){
  let id=e.target.id;
  if(e.target.checked==true){
    document.getElementById(id).style.textDecoration="line-through";
    console.log(e.target.checked);
    done();
    return true;
  }
  else{
    document.getElementById(id).style.textDecoration="none"; 
    undone();
    return false;
  }
  }
let count=0;
function counter(){
  count++;
  document.getElementById("todo-counter").innerHTML=count;
}
let doneTodo=0;
function done(){
  doneTodo++;
  document.getElementById('done').innerHTML=doneTodo;
}
function undone(){
  doneTodo--;
  document.getElementById('done').innerHTML=doneTodo;
}

function erase(){
  count--;
  document.getElementById('todo-counter').innerHTML=count;
  
  
}













