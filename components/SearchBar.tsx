import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';

export const SearchBar: React.FC = () => {
  return (
    <View className="mb-2 px-6 py-2">
      <View className="relative flex-row items-center rounded-2xl bg-gray-100 px-5 py-4">
        <Text className="mr-3 text-lg text-gray-400">🔍</Text>
        <TextInput
          placeholder="Search your car"
          placeholderTextColor="#9CA3AF"
          className="flex-1 text-base text-gray-900"
        />
        <TouchableOpacity className="ml-2 h-12 w-12 items-center justify-center rounded-2xl bg-gray-900">
          <Text className="text-xl text-white">⚙️</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
