import React, { useState } from "react";

export default function FormHandling() {
  const [formdata, setformdata] = useState({
  });

  const [record, setRecord] = useState([]);

  const handlechange = (e) => {
    setformdata({
      ...formdata,
      [e.target.name]: e.target.value
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    setRecord([...record, formdata]);

    setformdata({
      name: "",
      subject: "",
      age: "",
      address: "",
      gender: "",
      city: ""
    });
  };

  return (
    <div>
      <h1>Form Handling</h1>

      <form onSubmit={handlesubmit}>
        <input
          type="text"
          value={formdata.name}
          name="name"
          onChange={handlechange}
          placeholder="Enter Your Name"
        />
        <input
          type="text"
          value={formdata.subject}
          name="subject"
          onChange={handlechange}
          placeholder="Enter Your Subject"
        />
        <input
          type="text"
          value={formdata.age}
          name="age"
          onChange={handlechange}
          placeholder="Enter Your Age"
        />
        <input
          type="text"
          value={formdata.address}
          name="address"
          onChange={handlechange}
          placeholder="Enter Your Address"
        />

        <label>
          <input
            type="radio"
            value="male"
            name="gender"
            checked={formdata.gender === "male"}
            onChange={handlechange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            value="female"
            name="gender"
            checked={formdata.gender === "female"}
            onChange={handlechange}
          />
          Female
        </label>

        <select value={formdata.city} name="city" onChange={handlechange}>
          <option hidden>Select Your City</option>
          <option>Rajkot</option>
          <option>Mumbai</option>
          <option>Delhi</option>
        </select>

        <button type="submit">Submit</button>
      </form>

      {record.map((e, i) => (
        <ul key={i}>
          <li>{e.name}</li>
          <li>{e.subject}</li>
          <li>{e.age}</li>
          <li>{e.address}</li>
          <li>{e.gender}</li>
          <li>{e.city}</li>
        </ul>
      ))}
    </div>
  );
}
