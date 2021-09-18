import React, {useState} from "react"   

   const App = () => { 

const [tasks, setTasks] = useState( [ 

    { 

        id : 1, 

         title : " Task 1 ", 

        completed : false 

    },                 

    { 

        id : 2, 

         title : " Task 2 ", 

        completed : false 

    } 

 ] ) ; 

 const [inputText, setInputText] = useState("") ;



    const completedTask = ( index ) => {  

        const tempTasks = [...tasks] ;

        tempTasks[index].completed = true ;

        setTasks(tempTasks)

    } 
    
     
    
     
    
    const deletedTask = ( id ) => {  
    
        const tempTasks = [...tasks] ;

        const filteredTasks = tempTasks.filter( (task) => {
             
              if(task.id !== id){
                  return true
              }else{
                  return false
              }
        });

        setTasks(filteredTasks)

    
    } 


    const inputHandler = (e) => {
        setInputText(e.target.value)
    }


    const addTask = () => {
        const newTask = {
            id : Math.ceil( Math.random() * 1000) ,
            title : inputText,
            completed:false
        }

        setTasks([...tasks, newTask])

        setInputText("")
    }


     return ( 

        < div className = " container "> 

      {  

            tasks.map( (task, index) => {  

                    return  <div> 

                                     <h4> { task.title }</h4> 

                                     {

                                         task.completed  ? 

                                   <button onClick={() => deletedTask(task.id)}> 

                                          Delete 

                                    </button> 

                                    :

                                    <button onClick={() => completedTask(index)}> 

                                          Completed 

                                    </button>

                                     }

                               </div> 

            }  ) 

       }
       

       <div>
           <input value={inputText} onChange={(e) => inputHandler(e)}/>
           <button onClick={addTask}>
               add task
           </button>
       </div>

       </div> 

   ) 

} 

export default App ; 

 