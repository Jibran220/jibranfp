import express from "express"
import { getProducts, createPost } from "../controllers/RFQ_Manager.js"
const router = express.Router();
import auth from "../middleware/authv.js";

router.get("/", getProducts)
router.post("/", createPost)



export default router;