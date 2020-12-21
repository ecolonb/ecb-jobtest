import express from 'express';
import { newCar, getAllCars, putInMaintenance } from '../controllers/cars';

const router = express.Router();
router.post('/new', newCar);
router.get('/all', getAllCars);
router.put('/maintenance', putInMaintenance);

export default router;
