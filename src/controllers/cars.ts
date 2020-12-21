import Car from '../models/cars';

export async function newCar(req, res, next) {
  try {
    const body = { ...req.body };
    const car = new Car(body);
    await car.save();
    return res.status(200).json({ ...req.body, car });
  } catch (err) {
    return res.status(400).json({ ok: false, err });
  }
}

export async function getAllCars(req, res, next) {
  try {
    const cars = await Car.find({});
    return res.status(200).json({ ok: true, cars });
  } catch (err) {
    return res.status(400).json({ ok: false, err });
  }
}

export async function putInMaintenance(req, res, next) {
  try {
    const { _id, mechanic, inMaintenance } = req.body;
    const changes = {
      mechanic,
      updated_at: new Date(),
      in_maintenance: inMaintenance
    };
    await Car.findOneAndUpdate(_id, changes);
    const car = await Car.findById(_id);
    return res.status(200).json({ ok: true, car });
  } catch (err) {
    return res.status(400).json({ ok: false, err });
  }
}
