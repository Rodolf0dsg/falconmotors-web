export interface VehicleProps {
  id:           string | number;
  brand:        string;
  model:        string;
  year:         number;
  transmission: string;
  mileage:      number;
  price:        number;
  imageUrl:     string;
  sold:         boolean;
  used:         boolean;
}

export const vehicles: VehicleProps[] = [
  { 
    id: 1,
    brand: 'Toyota',
    model: 'Corolla',
    year: 2023,
    transmission: 'Auto',
    mileage: 5000,
    price: 25000,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8m1dBNMAdQ-1cWeFW0MZBhPXufcHabexCuPtJSWQunUHUSNUGY1WsFmX4EFwZKtLVZNOr4a4MHkGod6qnaow7eB7n-jcETPwfO3aXMeA5XqumBJ3Or1bAJfholzTIPJL1PUZSWKgm8Mf3G-mp4KewQpGlK7AIgdJkd0pWdU8lda2zAoFW2Z-Gt-ds5-sXzWsCbsJyrWE31p0yqwNe7KaPSCgBUVdbZDkQjYAIHvGgF6SiOouZhmnWePnK3ZB1KhzMccHwDFXI55iN',
    sold: false,
    used: false,
  },
  {
    id: 2,
    brand: 'Ford',
    model: 'Mustang',
    year: 2022,
    transmission: 'Sincronico',
    mileage: 12000,
    price: 25000,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDo48nKAogMOYd2vv3wO3oWrOEIhSt_pVQvLaNbQxVlDsIDobbmfVtRV9nTs87CQ8p_Yt4o8RtirFxj4CMnJoS_yrbDSTI_QudN6BGomlVbJAYZGePoPmTXGNzlaIMRIEiuh7PVatDz5JAPvxBD2nCT5ihTcbovpgeny31GRs4Q3Djq72yNOM7EaX-jGIwaeDiie3vT_es5hpcN8WgUzWSR8PgKlODeC9IoXWAeBe0Rcd0tqhTARlCuY1W9mZ5i802-_hEpdqQ0FEKP',
    sold: true,
    used: true,
  },
  {
    id: 3,
    brand: 'Honda',
    model: 'Civic',
    year: 2021,
    transmission: 'Sincronico',
    mileage: 25000,
    price: 22000,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAm7Qbho07Cy-wLdzQeLTj0kYxvXrrXYEZRLDBo_B5TUXVQevis6lRhwm5iuZu9dQP35sYl70lmLJxy-lX-YrzDPUMB08wSpAHOuFByQENjZy0RvpzBHyaAbFAM1IHwmSwO7WUYdF7X2yDEK6cx_ypW-O0iAiHOFrL28-nW3yFMPBtxcAnsDAbSdjZnqKLGIv29YgHvxQXbfz2k8mbO0Q2NPwPckRF1BxOtAM8Gi7iPmEMND4LArevVn6ySlTRnTp8rHkgzbLE4O1SV',
    sold: false,
    used: true,
  },
  { 
    id: 4,
    brand: 'Chevrolet',
    model: 'Silverado',
    year: 2023,
    transmission: 'Sincronico',
    mileage: 1500,
    price: 55000,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGwHRPYHhLIEvAs1pIKtEJQrkzlLduj6rgElKP9r4k6coZZDikVeieOcvxhzevPwb3AMsAFE5OESm5Gzwh7zgwsqv1FkfEqIz91rXCJN-lb32_o72aU3lXcOdq2KZvSwpkI2oHBSdnAeXhpigRARLR-bn9msADWBYDIWmjNlkK-wdmL4edrhxapmg790QbTuParSYbzVGgBG1skyxM6_Z42cLdzisA4fTKh9e-ZEG7VLzzgmK27RJTfxi5eR0tqAdDbVE6bUFwy3uT',
    sold: false,
    used: false,
  },
  { 
    id: 5,
    brand: 'Jeep',
    model: 'Wrangler',
    year: 2020,
    transmission: 'Auto',
    mileage: 45000,
    price: 42000,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGwHRPYHhLIEvAs1pIKtEJQrkzlLduj6rgElKP9r4k6coZZDikVeieOcvxhzevPwb3AMsAFE5OESm5Gzwh7zgwsqv1FkfEqIz91rXCJN-lb32_o72aU3lXcOdq2KZvSwpkI2oHBSdnAeXhpigRARLR-bn9msADWBYDIWmjNlkK-wdmL4edrhxapmg790QbTuParSYbzVGgBG1skyxM6_Z42cLdzisA4fTKh9e-ZEG7VLzzgmK27RJTfxi5eR0tqAdDbVE6bUFwy3uT',
    sold: false,
    used: true,
  },
  { 
    id: 6,
    brand: 'BMW',
    model: 'Serie 3',
    year: 2022,
    transmission: 'Auto',
    mileage: 18000,
    price: 48000,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3reUbiGeY5xtCcSfHNPbgfvd6tBDUUILpd372ctopt8L5EA5lf21u47Uzt1QqCmhsYzxK4q4NGHeCfeRJYe8mafNIxqmvGITMrqqDAMkzKA2e9gcMkNX8aXi9nPLdnRnTktZ-BRVNAYxxwGQpEpfjoHsC9AOgUaqa1qQ2jkn1mVyHSP0urcT5AyE_zRfkEItel9WqlsoNKjAcTcqj5ULgFH7eS_SU94C5G54P2BtQOrYRQh61pq8ShL93MPrLn8ckozb9ARPDwUkg',
    sold: false,
    used: true,
  },
]