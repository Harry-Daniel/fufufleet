import { View, Text, Dimensions, Image, TouchableOpacity } from "react-native";
import { featured } from "../../constants/index";
import { useRouter } from "expo-router";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

import bikeguy from "../../assets/images/bikeguy.png";
import deliverygirl from "../../assets/images/deliverygirl.jpg";
import { Feather } from "@expo/vector-icons";
import { useCartStore, useRestaurantStore } from "../../store";

const { width, height } = Dimensions.get("screen");
const DeliveryScreen = () => {
  const restaurant = useRestaurantStore((state) => state.restaurant);
  const router = useRouter();

  // Zustand Hooks
  const emptyCart = useCartStore((state) => state.emptyCart);

  const cancelOrder = () => {
    router.push({ pathname: "/" });
    emptyCart()
  };
  return (
    <View className=" relative" style={{ width: width, height: height }}>
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.lng,
          latitudeDelta: 0.01, // zoomed OUT (city / country level)
          longitudeDelta: 0.01,
        }}
        mapType="standard"
        style={{ width: width, height: height }}
        provider={PROVIDER_GOOGLE}
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.lng,
          }}
          title={restaurant.name}
          description={restaurant.description}
        />
      </MapView>
      <View
        className="rounded-t-3xl bottom-[50px] bg-white absolute"
        style={{ width: width }}
      >
        <View className="flex-row justify-between items-center px-5 pt-10">
          <View>
            <Text className="text-lg text-gray-700 font-semibold">
              Estimated Arrival
            </Text>
            <Text className="text-3xl font-extrabold text-gray-700">
              20-30 Minutes
            </Text>
            <Text className="mt-2 text-gray-700 font-semibold">
              Your Order is on it's wasy
            </Text>
          </View>
          <View className="h-24 justify-center items-center">
            <Image className="w-24 h-32 scale-75 " source={bikeguy} />
          </View>
        </View>
        <View className="bg-brand-opacity80 p-2 flex-row justify-between items-center rounded-full my-5 mx-2">
          <View className="p-1 rounded-full bg-[#ffffff40]">
            <Image
              className="h-16 w-16 scale- rounded-full"
              source={deliverygirl}
            />
          </View>
          <View className="flex-1 ml-3">
            <Text className="text-lg font-bold text-white">Merilyn Monroe</Text>
            <Text className="font-semibold text-white">Your Rider</Text>
          </View>
          <View className="flex-row items-center space-x-3 mr-3 gap-1">
            <TouchableOpacity className="bg-brand p-2 rounded-full">
              <Feather name="phone" color="white" size={24} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={cancelOrder}
              className="bg-red-600 p-2 rounded-full"
            >
              <Feather name="x" color="white" size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DeliveryScreen;
