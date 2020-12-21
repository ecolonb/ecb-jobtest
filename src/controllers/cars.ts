import Car from '../models/cars';

export async function newCar(req, res, next) {
  try {
    const body = { ...req.body };
    console.log('body: ', body);
    const car = new Car(body);
    await car.save();
    return res.json({ ...req.body, car });
  } catch (err) {
    console.log('err: ', err);
    return res.json({ ok: false, err });
  }
}
