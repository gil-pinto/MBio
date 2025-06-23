export type Car = {
    id: string;
    model: string;
    image: string;
    power: string;
    fuelType: string;
    transmission: string;
    stockStatus: string;
    price: string;
    monthlyPayment: string;
    co2: string;
    consumption: string;
    dealer: {
      name: string;
      logo?: string;
      address: string;
    };
  };
  
  export const cars: Car[] = [
    {
      id: '1',
      model: 'Mercedes-Benz Classe A 180 AMG Line',
      image: 'assets/imgs/mock-cars/mercedes_classA.png',
      power: '100 kW (136 cv)',
      fuelType: 'Gasolina',
      transmission: 'Automático',
      stockStatus: 'Stock [5]',
      price: '€37.000',
      monthlyPayment: '€429/mês',
      co2: '130 g/km',
      consumption: '5.7 l/100km',
      dealer: {
        name: 'Caetano Star Mercedes-Benz',
        logo: 'assets/imgs/dealers/logo-Caetano_Star.png',
        address: 'R. Barreiro 547, 4405-730 Vila Nova de Gaia',
      },
    },
    {
      id: '2',
      model: 'Mercedes-Benz GLC 220 d 4MATIC',
      image: 'assets/imgs/mock-cars/mercedes-GLC.png',
      power: '143 kW (194 cv)',
      fuelType: 'Diesel',
      transmission: 'Automático',
      stockStatus: 'Stock [3]',
      price: '€60.000',
      monthlyPayment: '€679/mês',
      co2: '143 g/km',
      consumption: '5.3 l/100km',
      dealer: {
        name: 'C.Santos VP - Port',
        logo: 'assets/imgs/dealers/logo_C-Santos-VP.jpg',
        address: 'R. de Delfim Ferreira 340, 4100-199 Porto',
      },
    },
    {
      id: '3',
      model: 'Mercedes-Benz EQS 450+',
      image: 'assets/imgs/mock-cars/mercedes-EQS.png',
      power: '245 kW (333 cv)',
      fuelType: 'Elétrico',
      transmission: 'Automático',
      stockStatus: 'Stock [1]',
      price: '€129.000',
      monthlyPayment: '€1.499/mês',
      co2: '0 g/km',
      consumption: '18.3 kWh/100km',
      dealer: {
        name: 'Carclasse',
        address: 'Av. Mar. Gomes da Costa 33, 1800-255 Lisboa',
      },
    },
  ];