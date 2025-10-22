import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useCars } from '../hooks/useCars';
import { CarCard } from './CarCard';

export const PopularCars: React.FC = () => {
  const { data: cars, isLoading } = useCars();

  const handleViewAll = () => {
    console.log('View All clicked');
  };

  if (isLoading) {
    return (
      <View className="px-6 py-4">
        <ActivityIndicator size="large" color="#111827" />
      </View>
    );
  }

  return (
    <View className="px-6 py-3">
      <View className="mb-4 flex-row items-center justify-between">
        <Text className="text-2xl font-bold text-gray-900">Popular Car</Text>
        <TouchableOpacity onPress={handleViewAll}>
          <Text className="text-base font-medium text-gray-500 underline">View All</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row flex-wrap justify-between">
        {cars?.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </View>
    </View>
  );
};
