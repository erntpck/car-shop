import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

interface BrandItemProps {
  name: string;
  logo: string;
}

const BrandItem: React.FC<BrandItemProps> = ({ name, logo }) => {
  return (
    <TouchableOpacity className="mr-6 items-center">
      <View className="mb-2.5 h-24 w-24 items-center justify-center rounded-full bg-gray-900">
        <Text className="text-3xl font-bold text-white">{logo}</Text>
      </View>
      <Text className="text-sm font-medium text-gray-700">{name}</Text>
    </TouchableOpacity>
  );
};

export const BrandList: React.FC = () => {
  const brands = [
    { name: 'Cadillac', logo: 'C' },
    { name: 'Tesla', logo: 'T' },
    { name: 'BMW', logo: 'B' },
    { name: 'Mazda', logo: 'M' },
  ];

  return (
    <View className="py-5">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 24 }}>
        {brands.map((brand, index) => (
          <BrandItem key={index} name={brand.name} logo={brand.logo} />
        ))}
      </ScrollView>
    </View>
  );
};
