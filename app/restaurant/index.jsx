import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { useLocalSearchParams, useRouter } from "expo-router";

import fullstar from "../../assets/icons/fullstar.png";
import DishRow from "../../components/dishRow";
import { StatusBar } from "expo-status-bar";
import CartIcon from "../../components/cartIcon";

const { height } = Dimensions.get("screen");
const RestaurantScreen = () => {
  const { params } = useLocalSearchParams();
  const router = useRouter();
  let item = JSON.parse(params);
  // console.log(item);

  return (
    <View>
      <CartIcon />
      <StatusBar style="light" />
      <ScrollView>
        <View className="relative">
          <Image
            className="w-full "
            style={{ height: height * 0.3 }}
            source={item.image}
          />
          <TouchableOpacity
            onPress={() => router.back()}
            className="absolute top-14 left-4 bg-brand opacity-95 p-2 rounded-full shadow "
          >
            <Feather name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View
          className="bg-white -mt-12 pt-6"
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        >
          <View className="px-5">
            <Text className="text-3xl font-bold">{item.name}</Text>
            <View className="flex-row gap-x-1">
              <View className="flex-row items-center space-x-1">
                <Image source={fullstar} className="w-6 h-6" />
                <Text className="text-green-700 text-xs">{item.stars} </Text>
                <Text className="text-gray-700 text-xs">
                  ({item.reviews} reviews) •{" "}
                  <Text className="font-semibold text-xs">{item.category}</Text>
                </Text>
              </View>
              <View className="flex-row items-center gap-x-1">
                <Feather name="map-pin" color="black" size={16} />
                <Text className="text-gray-700 text-xs">
                  Nearby • {item.address}
                </Text>
              </View>
            </View>

            <Text className="text-gray-500 mt-2">{item.description}</Text>
          </View>
        </View>
        <View className="pb-36 bg-white">
          <Text className="px-4 py-4 text-2xl font-semibold">Menu</Text>
          {/* dishes */}
          {item.dishes.map((dish, index) => (
            <DishRow key={index} item={{ ...dish }} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default RestaurantScreen;
