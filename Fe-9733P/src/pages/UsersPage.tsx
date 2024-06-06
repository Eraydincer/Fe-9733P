import React from 'react'
import {useLoaderData,Link} from "react-router-dom";
interface User{
    id:number;
    name:string;
    username:string;
    email: string;
}
export const usersLoader = async ()=>{
    const response =await fetch("https://jsonplaceholder.typicode.com/users")
    const users= await response.json()
    return users
}  

function UsersPage  ()  {
const users=useLoaderData() as User[]

  return (
   <>
   <h1>users</h1>
   <ul>
    {users.map(user=>(
        <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
        </li>
    ))}
   </ul>
   </>
  )
}

export default UsersPage