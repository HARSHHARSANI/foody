import React from "react";
import styles from "./Hero.module.css"; // Import CSS module correctly
import backgroundImage from "../images/bg.png";

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

const Hero = ({ filteredData }) => {
  const handlefilter = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      <div
        className={styles.hero}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div
          className="cardSection d-flex flex-wrap "
          style={{ margin: " 0 100px" }}
        >
          {(filteredData ? filteredData : data).map((item, index) => (
            <div key={index}>
              <div
                className={`${styles.card} card gap-3 mx-3  mt-3 bg-transparent`}
              >
                <div
                  className="d-flex"
                  style={{ height: "167px", width: "340px" }}
                >
                  <div className="CardImage mt-2 ">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div
                    className="cartContent text-sm "
                    style={{ marginLeft: "5px" }}
                  >
                    <div className="">
                      {" "}
                      <h3 style={{ fontSize: "16px" }} className="mt-2 ">
                        {item.name}
                      </h3>
                    </div>{" "}
                    <div>
                      <p style={{ fontSize: "14px" }}>{item.text}</p>
                    </div>{" "}
                    <button
                      className="btn btn-danger "
                      style={{ marginLeft: "120px" }}
                    >
                      ${item.price}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;
