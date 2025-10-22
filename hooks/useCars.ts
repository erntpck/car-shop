import { useQuery } from '@tanstack/react-query';
import { Car } from '../types/car';

export const useCars = () => {
  return useQuery({
    queryKey: ['cars'],
    queryFn: async (): Promise<Car[]> => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            {
              id: '1',
              name: 'Tesla Model 3',
              price: '$47,770',
              rating: 4.5,
              image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&h=300&fit=crop',
              isFavorite: true,
            },
            {
              id: '2',
              name: 'Tesla Model X',
              price: '$30,890',
              rating: 4.8,
              image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=400&h=300&fit=crop',
              isFavorite: false,
            },
            {
              id: '3',
              name: 'BMW Series 3',
              price: '$35,400',
              rating: 4.6,
              image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop',
              isFavorite: false,
            },
            {
              id: '4',
              name: 'Mercedes GLE',
              price: '$42,900',
              rating: 4.7,
              image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop',
              isFavorite: false,
            },
          ]);
        }, 500);
      });
    },
  });
};