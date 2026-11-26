
const cart = ["pizza", "burger", "coke"];
function placeOrder(cart) {
    console.log("Talking with Domino's");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Order Placed Successfully");
            const order = {
                orderId: 221,
                food: cart,
                location: "Delhi"
            };
            resolve(order);
        }, 2000);
    });
}
function preparingOrder(order) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Pizza preparation Done");
            const food_details = {
                token: 12,
                orderId: order.orderId,
                location: order.location
            };
            resolve(food_details);
        }, 3000);
    });
}
function pickupOrder(food_details) {
    console.log("Reaching restaurant for picking order");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Order picked up by Delivery Boy");
            const drop_location = food_details.location;
            resolve(drop_location);
        }, 2000);
    });
}
function deliverOrder(drop_location) {
    console.log("Delivery boy on the way");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Order Delivered Successfully at", drop_location);
            resolve("Thank you for ordering with Domino's");
        }, 3000);
    });
}
placeOrder(cart)
.then((order) => {
    console.log("Order received:", order);
    return preparingOrder(order);
})
.then((food_details) => {
    console.log("Food details:", food_details);
    return pickupOrder(food_details);
})
.then((drop_location) => {
    console.log("Drop location:", drop_location);
    return deliverOrder(drop_location);
})
.then((message) => {
    console.log(message);
})
.catch((error) => {
    console.log("Error:", error);
});
