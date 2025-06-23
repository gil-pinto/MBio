import type { NextApiRequest, NextApiResponse } from 'next';
import { cars, Car } from '../../data/cars';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Car[]>
) {
  res.status(200).json(cars);
}
