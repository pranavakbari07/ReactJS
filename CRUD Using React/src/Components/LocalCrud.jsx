import React, { useEffect, useState } from "react";

export default function LocalCrud() {

    const [formdata,setFormdata] = useState({})
    const [record,setRecord] = useState([])
    const [editIandex,setEditIndex] = useState(null)

    useEffect(()=>{
        let allData = JSON.parse(localStorage.getItem("record")) || []
        setRecord(allData)
    },[])

    const handlechange = (e)=>{
        setFormdata({
            ...formdata,
            id:Date.now(),
            [e.target.name]:e.target.value
        })
    }

    const handlesubmit = (e)=>{
        e.preventDefault()

        if(editIandex == null){
            setRecord([...record,formdata])
            localStorage.setItem("record",JSON.stringify([...record,formdata]))
        }else{
            let singleData = record.find((item)=> item.id == editIandex)
            singleData.name = formdata.name
            singleData.age = formdata.age
            singleData.city = formdata.city
            localStorage.setItem("record",JSON.stringify([...record]))
        }
        setEditIndex(null)
        setFormdata({
            name:"",
            age:"",
            city:""
        })
    }

    const handledelete = (id)=>{
        // console.log(id);
        let newData = record.filter((item)=> item.id !== id)
        setRecord(newData)
        localStorage.setItem("record",JSON.stringify(newData))  

        
    }

    const handleEdit = (id)=>{
        let singleData = record.find((item)=> item.id === id)
        setFormdata({
            name:singleData.name,
            age:singleData.age,
            city:singleData.city
        })
        setEditIndex(id)
    }

  return (
    <>
      <h1>LocalCrud</h1>

      <form onSubmit={handlesubmit}>
        <input type="text" value={formdata.name} placeholder="Enter your name" name="name" onChange={handlechange} />
        <input type="text" value={formdata.age} placeholder="Enter your age" name="age" onChange={handlechange} />
        <select name="city" value={formdata.city} onChange={handlechange}>
            <option value="" hidden>Enter Your City</option>
            <option value="Rajkot">Rajkot</option>
            <option value="Morbi">Morbi</option>
            <option value="Mumbai">Mumbai</option>
        </select>
        <button type="submit">{editIandex == null ? "Add Data" : "Update Data"}</button>
      </form>

      <table border={"1"} width={"100%"}>
        <thead>
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Age</td>
                <td>City</td>
                <td colSpan={"2"}>Action</td>
            </tr>
        </thead>
        <tbody>
            {
                record ?
                record.map((e,i)=>{
                    return <tr key={i}>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.age}</td>
                        <td>{e.city}</td>
                        <td><button onClick={()=>handleEdit(e.id)}>Edit</button></td>
                        <td><button onClick={()=> handledelete(e.id)}>Delete</button></td>
                    </tr>
                }):
                <p>Loading...</p>
            }
        </tbody>
      </table>
    </>
  );
}
