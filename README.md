#  Car Shop App

Bu proje, **React Native**, **TypeScript**, **Expo**, **NativeWind (Tailwind CSS)** ve **React Query (useQuery)** teknolojileri kullanılarak geliştirilmiş bir mobil uygulamadır.  

---

##  Amaç

> Ödev kapsamında, React Native ekosisteminde modern teknolojiler kullanarak komponent tabanlı bir yapı kurmak,  
> verileri `useQuery` hook’u aracılığıyla almak ve tüm stilleri NativeWind ile oluşturmaktır.

---

##  Kullanılan Teknolojiler

| Teknoloji | Açıklama |
|------------|-----------|
| **React Native** | Mobil uygulama geliştirme çatısı |
| **Expo Router** | Sayfa yönlendirme ve dosya tabanlı navigasyon |
| **TypeScript** | Tür güvenliği ve hata önleme |
| **NativeWind** | Tailwind CSS sınıflarını React Native üzerinde kullanma |
| **React Query** | Asenkron veri yönetimi (useQuery hook) |

---

##  Proje Yapısı
car-shop/
├── app/
│   ├── _layout.tsx
│   └── index.tsx
├── components/
│   ├── Header.tsx
│   ├── SearchBar.tsx
│   ├── BrandList.tsx
│   ├── CarCard.tsx
│   ├── PopularCars.tsx
│   └── BottomNav.tsx
├── hooks/
│   └── useCars.ts
├── types/
│   └── car.ts
└── assets/
    └── profile.jpg
---

##  Kurulum Adımları ve Başlatma
```bash
# Gerekli bağımlılıkları yükle
npm install

# Uygulamayı başlat (tüm platformlar için)
npm run start
# iOS simülatöründe çalıştır
npm run ios

# Android cihaz/simülatörde çalıştır
npm run android

# Web tarayıcısında çalıştır
npm run web
