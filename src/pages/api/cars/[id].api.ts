import type { NextApiRequest, NextApiResponse } from 'next';
import { cars, Car } from '../../../data/cars';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Car | { error: string }>
) {
  const { id } = req.query;

  const car = cars.find((c) => c.id === id);

  if (!car) {
    return res.status(404).json({ error: 'Car either doesnt exist or cant be found! Sorry :(' });
  }

  res.status(200).json(car);
}
