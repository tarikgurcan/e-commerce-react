import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton =({price})=>{
    const priceForStripe = price*100;
    const publishableKey="pk_test_51Jn0QhHOfhuyOSK02Hfq9A2OqZcsRKPgG925SICuAYjEWaJ8aQrpYVjturaiRquukPWMF2KC6eaqhnLZ4KpGeiMV006PkAKWiu"

    const onToken = token =>
    console.log(token)
    return(
        <StripeCheckout 
        label="Pay Now"
        Name="TarıkGürcan LLC."
        billingAddress
        shippingAddress
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton