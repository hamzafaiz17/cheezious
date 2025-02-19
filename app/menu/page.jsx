"use client";
import { useState } from "react";
import Header from "../globalComponenets/header";
import MenuC from "./menu";
import CardDesign from "./cardDesign";
import MenuData from "./menuCategories.json";

export default function MenuMain() {
  let [menu, setMenu] = useState(MenuData);

  return (
    <>
      <Header />

      <div className="container-fluid  categorybar py-2 bg-white">
        <div className="container ">
          <MenuC />
        </div>
      </div>

      <div className="container" style={{ marginTop: "20px" }}>
        <div className="row">
          <div className="col-md-8 col-sm-12">
            {menu.map((item, index) => (
              <div className="container mt-4" id={item.name} key={index}>
                <p className="fs-4 fw-bold">{item.name}</p>
                <div className="row">
                  {item.items.map((p, i) => (
                    <div className="col-md-4 col-sm-6" key={i}>
                      <div className=" card border-0 ProductCard rounded-4">
                        <div>
                          <img
                            src={
                              "https://cheezious.com/_next/image?url=http%3A%2F%2Fs3-me-south-1.amazonaws.com%2Fcz-content-prod%2Fproducts%2F1726048358599-Bazooka%20400x400.jpg&w=1920&q=75"
                            }
                            className="ProductImage"
                            alt=""
                          />
                        </div>
                        <div className="ProdcutBody p-4">
                          <h2
                            style={{ fontSize: "18px" }}
                            className="ProductTitle fw-bold"
                          >
                            {p.name}
                          </h2>
                          <p className="ProductDesc">{p.description}</p>
                          <div className="price">
                            <div className="d-flex justify-content-between align-items-center">
                              <div
                                style={{ color: "rgb(241, 91, 37)" }}
                                className="fw-bold fs-5"
                              >
                                RS. {p.price}
                              </div>
                              <div>
                                <span
                                  className="py-1 px-2 rounded-5 text-white"
                                  style={{
                                    backgroundColor: "rgb(241, 91, 37)",
                                    fontFamily: "Montserrat",
                                  }}
                                >
                                  Starting Price
                                </span>
                              </div>
                            </div>
                            <button className="btn border-0 py-3 px-4 bg-white rounded-3 w-100 mt-2 addtocartbtn fw-bold">
                              {" "}
                              + ADD TO CART
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-4 col-sm-12 pt-4">
            <div className="p-5 cartmenu text-center">
              <img
                src={
                  "https://cheezious.com/_next/static/media/emptycart.e7858caa.svg"
                }
              />
              <h3 className="fs-5 mt-5">YOUR CART IS EMPTY</h3>
              <p className="fs-6">Go ahead and explore top categories.</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" py-5 card-container"></div>
    </>
  );
}
