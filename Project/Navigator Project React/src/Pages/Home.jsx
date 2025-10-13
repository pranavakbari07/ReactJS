import React from "react";
import Card from "../Components/Card";

export default function Home() {
  let arr = [
    {
      id: "1", 
      image: "/21.jpg",
      title: "Jolly LLB 3",
      weight: "UA16+ | Hindi",
      price: "₹149",
    },
    {
      id: "2",
      image: "/21.jpg",
      title: "Mirai",
      weight: "UA16+ | Hindi and 1 more",
      price: "₹149",
    },
    {
      id: "3",
      image: "/21.jpg",
      title: "The Bengal Files",
      weight: "A | Hindi",
      price: "₹149",
    },
    {
      id: "4",
      image: "/21.jpg",
      title: "Ajey: The Untold Story",
      weight: "UA1+ | Hindi",
      price: "₹149",
    },
  ];
  
  localStorage.setItem("cartItems", JSON.stringify(arr));

  return (
    <div className="pt-35">
      <div className="flex justify-between items-center px-53">
        <h1 className="text-2xl font-bold">Dairy, Bread & Eggs</h1>
        <button className="text-green-500">see all</button>
      </div>

      <div className="flex justify-center gap-8">
        {arr.map((e, i) => {
          return <Card key={i} id={e.id} image={e.image} title={e.title} weight={e.weight} price={e.price} />;
        })}
      </div>
    </div>
  );
}
