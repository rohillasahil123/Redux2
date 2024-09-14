import React from 'react'

const AddTodoApp = () => {
  return (
    <>
    <div className='text-center text-4xl font-bold text mt-5'>TodoApp</div>
    <div  className='text-center'>
      <form action="">
        <input type="text" name="todo" placeholder="Enter Todo"
        className='h-10 w-[60%] mt-4 rounded-md' />
        <button className='h-10 w-[80px] bg-green-500 rounded-md '>Add-Todo</button>
      </form>
    </div>
    </>
    
  )
}

export default AddTodoApp