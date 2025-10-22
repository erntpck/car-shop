import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Home, Heart, ShoppingBag, User } from 'lucide-react-native';

export const BottomNav: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState('home');

  return (
    <View
      className="absolute bottom-0 left-0 right-0 rounded-t-3xl bg-gray-900 px-6"
      style={{
        paddingBottom: 30,
        paddingTop: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 10,
      }}>
      <View className="flex-row items-center justify-between">
        <TouchableOpacity
          className="items-center justify-center px-4 py-2"
          onPress={() => setActiveTab('home')}>
          <Home
            size={26}
            color={activeTab === 'home' ? '#FFFFFF' : '#9CA3AF'}
            fill={activeTab === 'home' ? '#FFFFFF' : 'none'}
          />
        </TouchableOpacity>

        <TouchableOpacity
          className="items-center justify-center px-4 py-2"
          onPress={() => setActiveTab('favorites')}>
          <Heart
            size={26}
            color={activeTab === 'favorites' ? '#FFFFFF' : '#9CA3AF'}
            fill={activeTab === 'favorites' ? '#FFFFFF' : 'none'}
          />
        </TouchableOpacity>

        <TouchableOpacity
          className="items-center justify-center px-4 py-2"
          onPress={() => setActiveTab('cart')}>
          <ShoppingBag
            size={26}
            color={activeTab === 'cart' ? '#FFFFFF' : '#9CA3AF'}
            fill={activeTab === 'cart' ? '#FFFFFF' : 'none'}
          />
        </TouchableOpacity>

        <TouchableOpacity
          className="items-center justify-center px-4 py-2"
          onPress={() => setActiveTab('profile')}>
          <User
            size={26}
            color={activeTab === 'profile' ? '#FFFFFF' : '#9CA3AF'}
            fill={activeTab === 'profile' ? '#FFFFFF' : 'none'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
