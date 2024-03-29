"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRouter = void 0;
const express_1 = require("express");
const order_controller_1 = require("../controllers/order.controller");
const router = (0, express_1.Router)();
exports.orderRouter = router;
router.route('/').get(order_controller_1.getOrders);
router.route('/admin').get(order_controller_1.getOrdersForAdmin);
router.route('/:id').get(order_controller_1.getOrderById);
router.route('/').post(order_controller_1.createOrder);
router.route('/:id').patch(order_controller_1.updateOrder);
//# sourceMappingURL=order.route.js.map