import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Add() {
  const [formdata, setFormdata] = useState({});
  const navigate = useNavigate();
  const locationObj = useLocation();

  useEffect(() => {
    if (locationObj.state) {
      let allData = JSON.parse(localStorage.getItem("record")) || [];
      let singleData = allData.find(
        (item) => item.id == locationObj.state.stid
      );
      setFormdata(singleData);
    }
  }, []);

  const HandleChange = (e) => {
    setFormdata({
      ...formdata,
      id: Date.now(),
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let allData = JSON.parse(localStorage.getItem("record")) || [];

    if (!locationObj.state) {
      allData.push(formdata);
    } else {
      let singleData = allData.find(
        (item) => item.id == locationObj.state.stid
      );

      if (singleData) {
        singleData.name = formdata.name;
        singleData.age = formdata.age;
      }
    }

    localStorage.setItem("record", JSON.stringify(allData));
    navigate("/");
  };

  return (
    <div>
      <h1>Add</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={formdata.name}
          name="name"
          onChange={HandleChange}
        />
        <input
          type="text"
          placeholder="Enter your age"
          value={formdata.age}
          name="age"
          onChange={HandleChange}
        />
        <button type="submit">
          {locationObj.state ? "Update data" : "Add Data"}
        </button>
      </form>
    </div>
  );
}
