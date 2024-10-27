function getShippingMessage(country, price, deliveryFree) {
    const totalPrice = price + deliveryFree;
    return `Shipping to ${country} will cost ${totalPrice} credits`;
}