import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Home() { 
const [data, setData ] = useState([]);

useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
        setData(response.data);
    }).catch((err)=>{
        console.log(err);
    })
})
 
  return (
   <><center>
   <h1>Data Fetching</h1></center>
   <table  className="table table-bordered">
    <tr>
            <td>User_Id</td>
             <td>Id</td>
             <td>title</td>
             <td>Body</td>
    </tr>
    {
        data.map((row)=>(
            <tr>
                <td>{row.userId}</td>
                <td>{row.id}</td>
                <td>{row.title}</td>
                <td>{row.body}</td>
            </tr>
        ))
    }
   </table>
   </>
  )
}

export default Home