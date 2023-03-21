//adding an item

//attatch a eventlistner sumit

//appebd the text user's input

//append a list item into the unordered list


//variables..
const form= document.getElementById('addForm')

const todoList=document.getElementById('items')


                                              
                                                      

//EventListeners....
form.addEventListener('submit',addTodo)



//functions...
function addTodo(e){
    e.preventDefault()        

  //get the input value from the user
  const newTodo =document.getElementById('item').value  
  console.log(newTodo)
                       
  //create a new li element
  const li=document.createElement('li')

                                            
  //add all th classes to the new todo
  li.className="list-group-item"        
                                  
  //create a new button
  const deleteBtn=document.createElement('button')
                                                                                                                                                                                    
  // Add classes to the button                                       
  deleteBtn.className="btn btn-danger btn-sm float-end delete"

  //add text to delete button
  deleteBtn.textContent='delete'
                                                                                                                
  //add the new todo to list element
  li.textContent= newTodo    

  //append the delete button  to the li
  li.append(deleteBtn)    

  
   //append li todolist
   todoList.append(li)                                                                                                    
}                                                                                           
                                 


                                                            


