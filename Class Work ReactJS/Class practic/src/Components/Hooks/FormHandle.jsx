// // import React, { useState } from "react";

// // export default function FormHandle() {
// //   const [formdata, setFormdata] = useState({});

// //   const [record, setRecord] = useState([]);

// //   const handlechange = (e) => {
// //     setFormdata({
// //       ...formdata,
// //       [e.target.name]: e.target.value,
// //     });
// //   };

// //   const handlesubmit = (e) => {
// //     e.preventDefault();
// //     // console.log(formdata);

// //     setRecord([...record, formdata]);

// //     setFormdata = {
// //       name: "",
// //       subject: "",
// //       gender: "",
// //       age: "",
// //       city: "",
// //     };
// //   };

// //   return (
// //     <div>
// //       <form onSubmit={handlesubmit}>
// //         <input
// //           type="text"
// //           onChange={handlechange}
// //           value={formdata.name}
// //           name="name"
// //           placeholder="Enter your name"
// //         />
// //         <input
// //           type="text"
// //           onChange={handlechange}
// //           value={formdata.subject}
// //           name="subject"
// //           placeholder="Enter your subject"
// //         />
// //         <input
// //           type="text"
// //           onChange={handlechange}
// //           value={formdata.age}
// //           name="age"
// //           placeholder="Enter your age"
// //         />
// //         <input
// //           type="radio"
// //           value={"male"}
// //           onChange={handlechange}
// //           name="gender"
// //           id=""
// //         />
// //         Male
// //         <input
// //           type="radio"
// //           value={"female"}
// //           onChange={handlechange}
// //           name="gender"
// //           id=""
// //         />
// //         Female
// //         <select name="city" value={formdata.city} onChange={handlechange} id="">
// //           <option value="" hidden>
// //             Select your city
// //           </option>
// //           <option value="Rajkot">Rajkot</option>
// //           <option value="Surat">Surat</option>
// //           <option value="Morbi">Morbi</option>
// //         </select>
// //         <button type="submit">Submit</button>
// //       </form>

// //       {record.map((e, i) => {
// //         return <ul key={i}>
// //           <li>{e.name}</li>
// //           <li>{e.subject}</li>
// //           <li>{e.age}</li>
// //           <li>{e.gender}</li>
// //           <li>{e.city}</li>
// //         </ul>;
// //       })}
// //     </div>
// //   );
// // }

// import React, { useState } from 'react'

// export default function FormHandle() {

//   const [formdata,setFormdata] =  useState({})

//   const [record,setRecord] = useState([])

//   const handlechange = (e)=>{
//     setFormdata({
//       ...formdata,
//       [e.target.name]:e.target.value
//     })
//   }

//   const handlesubmit = (e)=>{
//     e.preventDefault()
//     // console.log(formdata);

//     setRecord ([...record,formdata])

//     setFormdata({
//       name:"",
//       subject:"",
//       age:"",
//       gender:"",
//       city:"",

//     })

//   }

//   return (
//     <div>
//       <form onSubmit={handlesubmit}>
//         <input type="text" value={formdata.name} onChange={handlechange} name='name' placeholder='Enter your name' />
//         <input type="text" value={formdata.subject} onChange={handlechange} name='subject' placeholder='Enter your subject' />
//         <input type="text" value={formdata.age} onChange={handlechange} name='age' placeholder='Enter your age' />
//         <input type="radio" value={formdata.gender} onChange={handlechange} name="gender" id="" />Male
//         <input type="radio" value={formdata.gender} onChange={handlechange} name="gender" id="" />Female
//         <select name="city" value={formdata.city} onChange={handlechange} id="">
//           <option value="" hidden>select your city</option>
//           <option value="Rajkot">Rajkot</option>
//           <option value="Surat">Surat</option>
//           <option value="Morbi">Morbi</option>
//         </select>
//       <button type='submit'>Submit</button>
//       </form>

//       {
//         record.map((e,i)=>{
//           return <ul key={i}>
//             <li>{e.name}</li>
//             <li>{e.subject}</li>
//             <li>{e.age}</li>
//             <li>{e.gender}</li>
//             <li>{e.city}</li>
//           </ul>
//         })
//       }

//     </div>
//   )
// }

// import React, { useState } from 'react'

// export default function FormHandle() {

//   const [formdata,setFormdata] = useState({})

//   const [record,setRecord] = useState([])

//   const handlechange = (e)=>{
//     setFormdata({
//       ...formdata,
//       [e.target.name]:e.target.value
//     })
//   }

//   const handlesubmit = (e)=>{
//     e.preventDefault()
//     // console.log(formdata);

//     setRecord ([...record,formdata])

//     setFormdata({
//       name:"",
//       subject:"",
//       age:"",
//       gender:"",
//       city:""
//     })

//   }

//   return (
//     <div>
//       <form onSubmit={handlesubmit}>
//         <input type="text" value={formdata.name} onChange={handlechange} name='name' placeholder='Enter your name' />
//         <input type="text" value={formdata.subject} onChange={handlechange} name='subject' placeholder='Enter your subject' />
//         <input type="text" value={formdata.age} onChange={handlechange}  name='age' placeholder='Enter your age' />
//         <input type="radio" value={formdata.gender} onChange={handlechange}  name="gender" id="" />male
//         <input type="radio" value={formdata.gender} onChange={handlechange}  name="gender" id="" />female
//         <select name="city" value={formdata.city} onChange={handlechange}  id="">
//           <option hidden>Select your city</option>
//           <option value="Rajkot">Rajkot</option>
//           <option value="Surat">Surat</option>
//           <option value="Rajda">Rajda</option>
//         </select>
//         <button type='submmit'>Submit</button>
//       </form>

//       {
//         record.map((e,i)=>{
//           return <ul key={i}>
//             <li>{e.name}</li>
//             <li>{e.subject}</li>
//             <li>{e.age}</li>
//             <li>{e.gender}</li>
//             <li>{e.city}</li>
//           </ul>
//         })
//       }
//     </div>
//   )
// }

import React, { useState } from "react";

export default function FormHandle() {
  const [formdata, setFormdata] = useState({
    name: "",
    subject: "",
    age: "",
    gender: "",
    city: "",
  });

  const [record, setRecord] = useState([]);

  const handlechange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    // console.log(formdata);

    setRecord([...record, formdata]);

    setFormdata({
      name: "",
      subject: "",
      age: "",
      gender: "",
      city: "",
    });
  };
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          value={formdata.name}
          onChange={handlechange}
          name="name"
          placeholder="enter your name"
        />
        <input
          type="text"
          value={formdata.subject}
          onChange={handlechange}
          name="subject"
          placeholder="enter your subject"
        />
        <input
          type="text"
          value={formdata.age}
          onChange={handlechange}
          name="age"
          placeholder="enter your age"
        />
        <input
          type="radio"
          value={"Male"}
          checked={formdata.gender == "Male"}
          onChange={handlechange}
          name="gender"
          id=""
        />
        Male
        <input
          type="radio"
          value={"Femele"}
          checked={formdata.gender == "Female"}
          onChange={handlechange}
          name="gender"
          id=""
        />
        Female
        <select name="city" value={formdata.city} onChange={handlechange} id="">
          <option hidden>select your city</option>
          <option value="Rajkot">Rajkot</option>
        </select>
        <button type="submit">Submit</button>
      </form>

      {record.map((e, i) => {
        return (
          <ul key={i}>
            <li>Name : {e.name}</li>
            <li>Subject : {e.subject}</li>
            <li>Age : {e.age}</li>
            <li>Gender : {e.gender}</li>
            <li>City : {e.city}</li>
          </ul>
        );
      })}
    </div>
  );
}
