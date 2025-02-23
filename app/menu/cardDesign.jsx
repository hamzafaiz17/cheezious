export default function ProductCard(props) {
  return (
    <>
      <div className="card border-0 ProductCard rounded-4">
        <div>
          <img src={props.src} className="ProductImage" alt="" />
        </div>
        <div className="ProdcutBody p-4">
          <h2 style={{ fontSize: "18px" }} className="ProductTitle fw-bold">
            {props.title}
          </h2>
          <p className="ProductDesc">{props.desc}</p>
          <div className="price">
            <div className="d-flex justify-content-between align-items-center">
              <div
                style={{ color: "rgb(241, 91, 37)" }}
                className="fw-bold fs-5"
              >
                RS. {props.price}
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
    </>
  );
}
