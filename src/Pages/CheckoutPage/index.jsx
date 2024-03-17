import { Link } from "react-router-dom";

export default function CheckoutPage(inCart) {
  console.log(inCart);

  return (
    <div>
      <h1>In cart</h1>
      {inCart.inCart.map((inCart, i) => (
        // <p
        //   key={i + inCart.id}
        //   id={inCart.id}
        //   image={inCart.image}
        //   title={inCart.title}
        //   price={inCart.price}
        //   discountedPrice={inCart.discountedPrice}
        // />
        <p key={i + inCart.id}>{inCart.title}</p>
      ))}
      <Link to="../../Pages/CheckoutSuccessPage">
        <button>Checkout</button>
      </Link>
    </div>
  );
}
