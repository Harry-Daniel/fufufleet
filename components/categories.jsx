import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { categories } from "../constants";
import { useState } from "react";

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
      >
        {categories.map((category, index) => {
          const isActive = category.id === activeCategory;
          const btnClass = isActive ? "bg-gray-600" : "bg-gray-200";
          const textClass = isActive
            ? "font-semibold text-gray-800"
            : "text-gray-500";

          return (
            <View key={index} className="flex justify-center items-center mr-6">
              <TouchableOpacity
                className={`p-1 rounded-full shadow bg-gray-200 ${btnClass}`}
                onPress={() => setActiveCategory(category.id)}
              >
                <Image
                  style={{ width: 45, height: 45 }}
                  source={category.image}
                ></Image>
              </TouchableOpacity>
              <Text className={`text-sm ${textClass}`}>{category.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;
