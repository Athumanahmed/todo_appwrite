import React ,{useState} from 'react'
import {databases} from '../appwrite/appwriteConfig'
import {v4 as uuidv4} from 'uuid'


function TodoForm() {

    const [todo , setTodo] = useState('')

    // connection with the database and setting the documents

    const AddTodo = (e) =>{
        e.preventDefault()
       
        const promise = databases.createDocument(
            '662b7dda7ca335ad09c8',
            '662b7df8cdc1660cf467',
            uuidv4(),
            {todo}
        );
       promise.then(
        function(response){
            console.log(response)
        }, function(error){
            console.log(error)
        }
       )

     e.target.reset()
    }
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <form
        action=""
        onSubmit={AddTodo}
        className="flex justify-center mb-10"
      >
        <input
          type="text"
          name="tod"
          id=""
          placeholder="Enter Todo"
          className="border p-2 w-2/3 rounded-md"
          onChange = {(e) =>{
            setTodo(e.target.value)
          }}
        />
        <button
          className="bg-purple-500 p-2 text-white ml-2 rounded-md"
          type="submit"
        >
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default TodoForm