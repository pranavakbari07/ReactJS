import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Read() {
  const navigate = useNavigate();
  const [record, setRecord] = useState([]);

  useEffect(() => {
    let allRecord = JSON.parse(localStorage.getItem("record")) || [];
    setRecord(allRecord);
  }, []);

  const handleDelete = (id) => {
    let filterData = record.filter((item) => item.id !== id);
    localStorage.setItem("record", JSON.stringify(filterData));
    setRecord(filterData);
  };

  const handleEdit = (id) => {
    navigate("/add", { state: { stid: id } });
  };

  return (
    <div>
      <h1>Read</h1>
      <Link to="/add">
        <button>ADD DATA</button>
      </Link>

      {record.length > 0 ? (
        record.map((e, i) => (
          <ul key={e.id}>
            <li>{i + 1}</li>
            <li>{e.name}</li>
            <li>{e.age}</li>
            <li>
              <button onClick={() => handleEdit(e.id)}>Edit</button>
            </li>
            <li>
              <button onClick={() => handleDelete(e.id)}>Delete</button>
            </li>
          </ul>
        ))
      ) : (
        <p>NO RECORD</p>
      )}
    </div>
  );
}
