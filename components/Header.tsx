import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export const Header: React.FC = () => {
  return (
    <View className="flex-row items-center justify-between px-6 pb-4 pt-3">
      <View className="flex-row items-center">
        <Image
          source={require('../assets/profile.jpeg')}
          className="h-14 w-14 rounded-full"
          style={{
            width: 56,
            height: 56,
            borderRadius: 28,
            resizeMode: 'cover',
          }}
        />
        <View className="ml-3">
          <Text className="text-xs font-medium text-gray-400">Welcome 👋</Text>
          <Text className="mt-0.5 text-xl font-bold text-gray-900" style={{ fontSize: 20 }}>
            Eren TEPECIK
          </Text>
        </View>
      </View>
      <TouchableOpacity className="h-12 w-12 items-center justify-center">
        <Text className="text-3xl">🔔</Text>
      </TouchableOpacity>
    </View>
  );
};
