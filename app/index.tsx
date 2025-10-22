import React from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../components/Header';
import { SearchBar } from '../components/SearchBar';
import { BrandList } from '../components/BrandList';
import { PopularCars } from '../components/PopularCars';
import { BottomNav } from '../components/BottomNav';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}>
        <Header />
        <SearchBar />
        <BrandList />
        <PopularCars />
      </ScrollView>
      <BottomNav />
    </SafeAreaView>
  );
}
