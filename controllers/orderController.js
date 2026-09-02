let orders = [
    {
        id: 1,
        customerName: "Sumayyah",
        productName: "Cement",
        quantity: 5,
        totalPrice: 175000
    },
    {
        id: 2,
        customerName: "John",
        productName: "Iron Bars",
        quantity: 10,
        totalPrice: 250000
    }
];


// GET all orders
const getOrders = (req, res) => {
    res.status(200).json({
        success: true,
        count: orders.length,
        orders
    });
};


// GET one order
const getOrderById = (req, res) => {
    const id = Number(req.params.id);

    const order = orders.find((order) => order.id === id);

    if (!order) {
        return res.status(404).json({
            success: false,
            message: "Order not found"
        });
    }

    res.status(200).json({
        success: true,
        order
    });
};


// CREATE order
const createOrder = (req, res) => {
    const newOrder = {
        id: orders.length + 1,
        customerName: req.body.customerName,
        productName: req.body.productName,
        quantity: req.body.quantity,
        totalPrice: req.body.totalPrice
    };

    orders.push(newOrder);

    res.status(201).json({
        success: true,
        message: "Order created successfully",
        order: newOrder
    });
};


// UPDATE order
const updateOrder = (req, res) => {
    const id = Number(req.params.id);

    const order = orders.find((order) => order.id === id);

    if (!order) {
        return res.status(404).json({
            success: false,
            message: "Order not found"
        });
    }

    order.customerName = req.body.customerName ?? order.customerName;
    order.productName = req.body.productName ?? order.productName;
    order.quantity = req.body.quantity ?? order.quantity;
    order.totalPrice = req.body.totalPrice ?? order.totalPrice;

    res.status(200).json({
        success: true,
        message: "Order updated successfully",
        order
    });
};


// DELETE order
const deleteOrder = (req, res) => {
    const id = Number(req.params.id);

    const orderIndex = orders.findIndex((order) => order.id === id);

    if (orderIndex === -1) {
        return res.status(404).json({
            success: false,
            message: "Order not found"
        });
    }

    const deletedOrder = orders.splice(orderIndex, 1);

    res.status(200).json({
        success: true,
        message: "Order deleted successfully",
        order: deletedOrder[0]
    });
};


module.exports = {
    getOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder
};