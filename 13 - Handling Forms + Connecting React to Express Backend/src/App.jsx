import { useState } from 'react'
import { useForm } from "react-hook-form"
import './App.css'


function App() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors,isSubmitting},
  } = useForm();

  const delay = (d)=>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve()
      },d*1000);
    })
  }

  const onSubmit = async(data) => {
    // await delay(2) //simulating network delay

    let r = await fetch("http://localhost:3000/",{method:"POST", headers: {
    "Content-Type": "application/json", // this is crucial
    },body:JSON.stringify(data)})
    let res = await r.text()
    console.log(data,res)
    
    // console.log(data)

    // if(data.username !== "Abhishek"){
      //server side error
    //   setError("myform",{message:"Your form is not in good order because credentials are invalid"})
    // }
    // if(data.username === "Rohan"){
    //   setError("blocked",{message:"Blocked User"})
    // }
  }

  return (
    <>
      {isSubmitting && <div>Loading....</div>}
     <div className="container">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='username' {...register("username",{required:{value:true, message:"This field is necessary"}, minLength:{value:3,message:"Min length is 3"}, maxLength:{value:8,message:"Max length is 8"}})} type="text"/>
        {errors.username && <div className='red'>{errors.username.message}</div>}
        <br />
        <input placeholder='password' {...register("password",{minLength:{value:7,message:"Min length is 7"}})} type="password"/>
        {errors.password && <div className='red'>{errors.password.message}</div>}
        <br />
        <input disabled={isSubmitting} type="submit" value="Submit"/>
        {errors.myform && <div className='red'>{errors.myform.message}</div>}
        {errors.blocked && <div className='red'>{errors.blocked.message}</div>}
      </form>
     </div>
    </>
  )
}

export default App
