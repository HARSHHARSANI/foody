import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./header.module.css";
const data = [
  {
    name: "Boiled Egg",
    price: 10,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "../images/egg.png",
    type: "breakfast",
  },
  {
    name: "RAMEN",
    price: 25,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "/images/ramen.png",
    type: "lunch",
  },
  {
    name: "GRILLED CHICKEN",
    price: 45,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "../images/chicken.png",
    type: "dinner",
  },
  {
    name: "CAKE",
    price: 18,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "../images/cake.png",
    type: "breakfast",
  },
  {
    name: "BURGER",
    price: 23,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "/images/burger.png",
    type: "lunch",
  },
  {
    name: "PANCAKE",
    price: 25,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "../images/pancake.png",
    type: "dinner",
  },
];
const Header = ({ setFilteredData }) => {
  const handleClick = (e) => {
    const value = e.target.value;

    // Filter data based on the value
    const result =
      value === "all" ? data : data.filter((item) => item.type === value);

    // Update state with filtered data
    setFilteredData(result);
  };
  return (
    <div
      className="d-flex justify-content-between"
      style={{ backgroundColor: "#343a40", height: "241px" }}
    >
      <div className="mt-5 mx-4 p-3 fw-bold fs-4 text-white">
        F<span style={{ color: "red" }}>oo</span>dy Zone
      </div>
      <div className="mt-5 pt-5">
        <ul
          className="list-unstyled d-flex gap-2 fw-bold"
          style={{ marginTop: "80px" }}
        >
          <li>
            <button
              className="btn btn-danger rounded-2"
              onClick={handleClick}
              value={"all"}
            >
              All
            </button>
          </li>
          <li>
            <button
              className="btn btn-danger rounded-2"
              onClick={handleClick}
              value={"breakfast"}
            >
              Breakfast
            </button>
          </li>
          <li>
            <button
              className="btn btn-danger rounded-2"
              onClick={handleClick}
              value={"lunch"}
            >
              Lunch
            </button>
          </li>
          <li>
            <button
              className="btn btn-danger rounded-2"
              onClick={handleClick}
              value={"dinner"}
            >
              Dinner
            </button>
          </li>
        </ul>
      </div>
      <div className="mt-5 p-3 fw-bold mx-4">
        <input
          type="text"
          placeholder="Search Here ..."
          className={`bg-transparent ${styles.centerPlaceholder} input-no-outline input-placeholder`}
          style={{ border: "1px solid red", color: "white" }}
        />
      </div>
    </div>
  );
};

export default Header;
