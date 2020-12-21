import express from "express";
import { idValidator } from "../middlewares/id-validator";
import { newCar, getAllCars, putInMaintenance } from "../controllers/cars";

const router = express.Router();
router.post("/new", newCar);
router.get("/all", getAllCars);
router.put("/maintenance", idValidator, putInMaintenance);

export default router;
