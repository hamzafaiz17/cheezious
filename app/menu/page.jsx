"use client";
import { useState } from "react";
import Header from "../globalComponenets/header";
import MenuC from "./menu";
import CardDesign from "./cardDesign";
import MenuData from "./menuCategories.json";
import proimg from "@/public/images/main-product-image.webp";

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
                      <CardDesign
                        title={p.name}
                        desc={p.description}
                        price={p.price}
                        src={proimg.src}
                      />
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
