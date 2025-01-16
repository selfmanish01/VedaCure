import express from "express";
import { getMedicines,getPharmacologicalProperties } from "../controllers/medicine.js";
const router = express.Router()
router.get("/properties",getPharmacologicalProperties)
router.post('/',getMedicines)
export default router;
