import { useEffect, useState } from 'react';
import { Car } from '@src/data/cars';

type Props = {
  productId: string;
  title?: string;
};

export const ProductDetailPage = ({ productId, title }: Props) => {
  const [car, setCar] = useState<Car | null>(null);

  console.log('productId and then title (just created variables):', productId, title)

  useEffect(() => {
    console.log('productId inside useEffect v.1', productId)
    fetch(`/api/cars/${productId}`)
      .then(res => res.json())
      .then(setCar)
      .catch(err => console.error('Erro ao buscar carro:', err));
      console.log('productId inside useEffect v.2', productId)
  }, [productId]);

  console.log('productId inside useEffect v.3', productId)

  if (!car) return <p>Loading...</p>;

  return (
    <div>
      <h1>{title}</h1>
      <h2>{car.model}</h2>
      <p>Preço: {car.price} €</p>
      <p>Disponibilidade: {car.stockStatus}</p>
      <p>Concessionário: {car.dealer.name}</p>
    </div>
  );
};
