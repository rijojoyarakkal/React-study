function AddToCart({ cartitem }) {
  // console.log("fg", cartitem);
  let addToCartResult = cartitem.map((item) => {
    return (
      <div>
        <img src={item.img} />
        <h5>{item.titile}</h5>
      </div>
    );
  });
  return (
    <div>
      <div className="add-to-cart-wrapper">
        <h6 className="carttext">Your Cart</h6>
        <div className="add-to-cart-item">
          <div>{addToCartResult}</div>
        </div>
      </div>
    </div>
  );
}
export default AddToCart;
