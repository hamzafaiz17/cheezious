"use client";
import { useState, useRef } from "react";
import MenuData from "./menuCategories.json";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
export default function MenuCategories() {
  let [categories, setcategories] = useState(MenuData);
  const [activeCategory, setActiveCategory] = useState(null);
  const scrollContainer = useRef(null);

  const scrollToCategory = (category) => {
    const section = document.getElementById(category);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveCategory(category); // Active category update karna
    }
  };
  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="scrollable-buttons-container  rounded-3 d-flex align-items-center">
        <button
          className="border-0 me-2 bg-transparent"
          onClick={scrollLeft}
          style={{ marginLeft: "-15px" }}
        >
          <ArrowLeftCircle size={35} className="text-danger" />
        </button>

        <div
          className="d-flex flex-nowrap overflow-auto gap-2 py-2 custom-scrollbar"
          ref={scrollContainer}
        >
          {categories.map((c, i) => (
            <button
              key={i}
              //   href={`#${c.name}`}
              onClick={() => scrollToCategory(c.name)}
              className={`py-3 px-3  me-4 text-decoration-none rounded button-categories border-0 fw-bold scrollable-button ${
                activeCategory == c.name ? "themeyelow " : "bg-white text-dark"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          className=" border-0 ms-2 bg-transparent"
          onClick={scrollRight}
          style={{ marginRight: "-15px" }}
        >
          <ArrowRightCircle size={35} className="text-danger" />
        </button>
      </div>
    </>
  );
}
