const mongoose = require("mongoose");
const { Schema } = mongoose;

main().then(() => console.log("connection successfull"))
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');

}

const orderSchema = new Schema({
    item: String,
    price: Number,
})

const customerSchema = new Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: "Order"
        }
    ]
})

customerSchema.pre("findOneAndDelete", async () =>{
    console.log("Pre middlewares")
})
customerSchema.post("findOneAndDelete", async () =>{
    console.log("Pre middlewares")
})

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

const findCustomer = async () => {
    let result = await Customer.find({}).populate("orders");
    console.log(result[0]);
}

const addCust = async () => {
    let newCust = new Customer({
        name: "karan"
    })
    let newOrder = new Order({
        item: "pizza",
        price: 250
    })
    newCust.orders.push(newOrder);

    await newOrder.save();
    await newCust.save();

    console.log("added new customer");
}

const delCust =async () =>{
    let data = await Customer.findByIdAndDelete("68ca81405904959f3cd8213f");
 console.log(data)
}

delCust();


// addCust();

// findCustomer();
// const addCustomers = async () => {
//     let cus1 = new Customer({
//         name: "rahul kumar",
//     })

//     let order1 = await Order.findOne({ item: "chips" });
//     let order2 = await Order.findOne({ item: "chocolate" });

//     cus1.orders.push(order1);
//     cus1.orders.push(order2);

//     let result = await cus1.save();
//     console.log(result)
// }

// const addOrders = async () => {
//     let res = await Order.insertMany([
//         { item: "samosa", price: 12 },
//         { item: "chips", price: 10 },
//         { item: "chocolate", price: 40 },
//     ])
//     console.log(res);
// }
// addOrders();

