import alignR from "@/public/images/align.svg";
import MainLogo from "@/public/images/mainLogo.webp";
import Searchico from "@/public/images/searchicon.svg";
import markicon from "@/public/images/mark.svg";
import { ShoppingCart, User2, AlignRight } from "lucide-react";
import OffcanvasManu from "./offcanvasmenu";
export default function HeaderS() {
  return (
    <>
      <div className="row d-flex">
        <div className="col-md-2  d-flex align-items-center">
          <button
            class="border-0 bg-transparent"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasScrolling"
            aria-controls="offcanvasScrolling"
          >
            <AlignRight size={35} stroke={"#f15b25"} className="me-2" />
          </button>
          <OffcanvasManu />
          <a
            href="/"
            className="d-flex align-items-center text-white text-decoration-none"
          >
            <img src={MainLogo.src} width={"150px"} />
          </a>
        </div>
        <div className="col-md-6 align-items-center d-flex ">
          <form className="colorinput w-100 p-2 rounded-3">
            <div className="input-group ">
              <span
                className="input-group-text bg-transparent border-0"
                id="basic-addon1"
              >
                <img src={Searchico.src} width={20} alt="" />
              </span>
              <input
                type="text"
                className="form-control border-0 colorinput outlinefoucs text-gray-600 text-base"
                placeholder="Find in Cheezious"
                aria-label="Find in Cheezious"
                aria-describedby="basic-addon1"
              />
            </div>
          </form>
        </div>
        <div className="col-md-4 d-flex align-items-center justify-content-end">
          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <div className="input-group border py-2 rounded-3">
              <span
                className="bg-white input-group-text border-0"
                id="basic-addon1"
              >
                <img
                  src={markicon.src}
                  width={20}
                  className="bg-white"
                  alt=""
                />
              </span>
              <input
                type="text"
                className="form-control border-0 outlinefoucs"
                placeholder="Enter Delivery Location"
                aria-label="Enter Delivery Location"
                aria-describedby="basic-addon1"
              />
            </div>
          </form>

          <div className="text-end" bis_skin_checked="1">
            <button type="button" className="btn btn-warning me-2 px-3 ">
              <ShoppingCart fill={"black"} /> Cart
            </button>
            <button type="button" className="btn btn-warning  px-3">
              <User2 fill={"black"} />
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
