import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Car } from '../types/car';

interface CarCardProps {
  car: Car;
}

export const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <View className="mb-4 rounded-3xl bg-gray-100 p-3" style={{ width: '47%', marginRight: '3%' }}>
      <View className="relative">
        <TouchableOpacity
          className="absolute left-3 top-3 z-10 h-10 w-10 items-center justify-center rounded-full bg-white"
          style={{
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 8,
            elevation: 3,
          }}>
          <Text className="text-lg">{car.isFavorite ? '❤️' : '🤍'}</Text>
        </TouchableOpacity>
        <Image
          source={{ uri: car.image }}
          className="mb-3 w-full rounded-2xl"
          style={{ height: 120 }}
          resizeMode="cover"
        />
      </View>
      <Text className="mb-2 text-base font-bold text-gray-900" numberOfLines={1}>
        {car.name}
      </Text>
      <View className="flex-row items-center justify-between">
        <Text className="text-lg font-bold text-gray-900">{car.price}</Text>
        <View className="flex-row items-center rounded-lg bg-white px-2.5 py-1">
          <Text className="mr-1 text-base text-yellow-500">⭐</Text>
          <Text className="text-sm font-semibold text-gray-900">{car.rating}</Text>
        </View>
      </View>
    </View>
  );
};
