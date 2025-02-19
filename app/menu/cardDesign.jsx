export default function ProductCard() {
  return (
    <>
      <div className="card border-0 ProductCard rounded-4">
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
          <h2 style={{ fontSize: "18px" }} className="ProductTitle fw-bold">
            {p.name}
          </h2>
          <p className="ProductDesc">{p.description}</p>
          <div className="price">
            <div className="d-flex justify-content-between align-items-center">
              <div
                style={{ color: "rgb(241, 91, 37)" }}
                className="fw-bold fs-4"
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
                  sty
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
