import React ,{useState, useEffect} from 'react'
import {databases} from '../appwrite/appwriteConfig'
import { data } from 'autoprefixer'

function Todos() {
    const [todos, setTodos] = useState()
    const [loader, setloader] = useState(false)

    useEffect(() => {
        setloader(true)
        const getTodos = databases.listDocuments(
            '662b7dda7ca335ad09c8',
            '662b7df8cdc1660cf467',
        );

        getTodos.then(
            function(response){
                setTodos(response.documents)
            },
            function(error){
                console.log(error)
            }
           )

        setloader(false)
    }, [])

    const removeTodo = (id) =>{
        const promise = databases.deleteDocument('662b7dda7ca335ad09c8','662b7df8cdc1660cf467' , id);

        promise.then(function (response) {
            console.log(response); // Success
        }, function (error) {
            console.log(error); // Failure
        });

      
    }
    
  return (
    <div className="max-w-7xl mx-auto">
      <p className="text-xl font-bold mb-2">Todo List</p>
      {loader ? (
        <p className='text-center'>Loading ...</p>
      ) : (
        <div>
          
           {todos && todos.map((item) =>(
             <div key={item.$id} >
             <div className="p-4 flex items-center justify-between border-b-2 bg-gray-100 rounded-lg mb-1">
               <div>
                 <p>{item.todo}</p>
               </div>
               <div>
                 <span
                   className="text-red-400 cursor-pointer"
                   onClick={() => {
                    removeTodo(item.$id)
                   }}
                 >
                   Delete
                 </span>
               </div>
             </div>
           </div>
           ))}
            
        </div>
      )}
    </div>
  )
}

export default Todos