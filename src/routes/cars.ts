import express from 'express';
import { newCar } from '../controllers/cars';

const router = express.Router();
router.post('/new', newCar);

export default router;
