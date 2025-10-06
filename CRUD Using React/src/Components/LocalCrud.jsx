import React, { useEffect, useState } from "react";

export default function LocalCrud() {
  const [formdata, setFormdata] = useState({});
  const [record, setRecord] = useState([]);
  const [editIandex, setEditIndex] = useState(null);

  useEffect(() => {
    let allData = JSON.parse(localStorage.getItem("record")) || [];
    setRecord(allData);
  }, []);

  const handlechange = (e) => {
    setFormdata({
      ...formdata,
      id: Date.now(),
      [e.target.name]: e.target.value,
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    if (editIandex == null) {
      setRecord([...record, formdata]);
      localStorage.setItem("record", JSON.stringify([...record, formdata]));
    } else {
      let singleData = record.find((item) => item.id == editIandex);
      singleData.name = formdata.name;
      singleData.age = formdata.age;
      singleData.city = formdata.city;
      localStorage.setItem("record", JSON.stringify([...record]));
    }
    setEditIndex(null);
    setFormdata({
      name: "",
      age: "",
      city: "",
    });
  };

  const handledelete = (id) => {
    // console.log(id);
    let newData = record.filter((item) => item.id !== id);
    setRecord(newData);
    localStorage.setItem("record", JSON.stringify(newData));
  };

  const handleEdit = (id) => {
    let singleData = record.find((item) => item.id === id);
    setFormdata({
      name: singleData.name,
      age: singleData.age,
      city: singleData.city,
    });
    setEditIndex(id);
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center text-gray-700 my-5">
        LocalCrud
      </h1>

      <form
        onSubmit={handlesubmit}
        className="max-w-md mx-auto bg-white p-5 rounded-md shadow-md flex flex-col gap-3"
      >
        <input
          type="text"
          value={formdata.name}
          placeholder="Enter your name"
          name="name"
          onChange={handlechange}
          className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
        />

        <input
          type="text"
          value={formdata.age}
          placeholder="Enter your age"
          name="age"
          onChange={handlechange}
          className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
        />

        <select
          name="city"
          value={formdata.city}
          onChange={handlechange}
          className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
        >
          <option value="" hidden>
            Enter Your City
          </option>
          <option value="Rajkot">Rajkot</option>
          <option value="Morbi">Morbi</option>
          <option value="Mumbai">Mumbai</option>
        </select>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          {editIandex == null ? "Add Data" : "Update Data"}
        </button>
      </form>

      <div className="overflow-x-auto mt-10 px-3">
        <table className="min-w-full bg-white border border-gray-300 rounded-md shadow-sm">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="py-2 px-3 border">Id</th>
              <th className="py-2 px-3 border">Name</th>
              <th className="py-2 px-3 border">Age</th>
              <th className="py-2 px-3 border">City</th>
              <th className="py-2 px-3 border text-center" colSpan="2">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {record && record.length > 0 ? (
              record.map((e, i) => (
                <tr
                  key={i}
                  className="text-center border-t hover:bg-gray-50 transition"
                >
                  <td className="py-2 px-3 border text-sm text-gray-500">
                    {e.id}
                  </td>
                  <td className="py-2 px-3 border">{e.name}</td>
                  <td className="py-2 px-3 border">{e.age}</td>
                  <td className="py-2 px-3 border">{e.city}</td>
                  <td className="py-2 px-3 border">
                    <button
                      onClick={() => handleEdit(e.id)}
                      className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>
                  </td>
                  <td className="py-2 px-3 border">
                    <button
                      onClick={() => handledelete(e.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="text-center py-4 text-gray-500 font-medium"
                >
                  No records found 😕
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
