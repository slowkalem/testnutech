const { Router } = require("express");
const { celebrate } = require("celebrate");
const { topUpSchema, transactionSchema, getTransactionHistorySchema } = require("../schemas/TransactionSchema");
const TransactionController = require("../controllers/TransactionController");
const { JwtFilter } = require("../utils/JwtUtil");
const router = Router();

router.post("/topup", JwtFilter, celebrate({ body: topUpSchema }), TransactionController.topUp);
router.post("/transaction", JwtFilter, celebrate({ body: transactionSchema }), TransactionController.transaction);
router.get("/transaction/history", JwtFilter, celebrate({ query: getTransactionHistorySchema }), TransactionController.getAllTransactionHistory);

module.exports = router;