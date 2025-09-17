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

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

const findCustomer = async ()=>{
    let result = await Customer.find({}).populate("orders");
    console.log(result[0]);
}

findCustomer();
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

