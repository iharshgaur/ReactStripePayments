import StripeCheckout from "react-stripe-checkout";
function Stripe(): JSX.Element {
  function handleToken(token: any) {
    console.log(token);
  }
  return (
    <StripeCheckout
      stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY || ""}
      token={handleToken}
      amount={1234}
      shippingAddress
      billingAddress
      name="Course 1"
    />
  );
}

export default Stripe;
