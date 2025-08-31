import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { featured } from "../../constants";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import bikeguy from "../../assets/images/bikeguy.png";

const CartScreen = () => {
  const router = useRouter();
  const restaurant = featured.restaurants[0];

  const handlePlaceOrder = () => {
    router.push({ pathname: "/orderPreparing" });
  };

  return (
    <SafeAreaView className="bg-white h-full">
      {/* Back Button */}
      <View className="relative py-4 shadow-sm">
        <TouchableOpacity
          className="bg-brand absolute rounded-full z-20  p-1  shadow top-14 left-6"
          onPress={() => router.back()}
        >
          <Feather name="arrow-left" size={24} color="white" />
        </TouchableOpacity>

        <View className="mt-8">
          <Text className="text-center items-center justify-center font-bold text-xl text-black">
            Your Cart
          </Text>
          <Text className=" text-center text-gray-500">{restaurant.name}</Text>
        </View>
      </View>

      {/* delivery time */}
      <View className="bg-brand-opacity20 mt-5  flex-row px-4 items-center ">
        <Image source={bikeguy} className="w-20 h-28    scale-90" />
        <Text className="flex-1 pl-4">Deliver in 20-30 minutes</Text>
        <TouchableOpacity>
          <Text className="font-bold text-brand">Change</Text>
        </TouchableOpacity>
      </View>

      {/* Dishes */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50,
        }}
        className="bg-white pt-5"
      >
        {restaurant.dishes.map((dish, index) => {
          return (
            <View
              key={index}
              className="flex-row items-center gap-x-3 py-2 px-4 bg-white rounded-3xl  mx-2 mb-3 shadow-md"
            >
              <Text className="font-bold text-brand"> 2 x</Text>
              <Image className="h-14 w-14 rounded-full" source={dish.image} />
              <Text className="flex-1 font-bold text-gray-700 ">
                {dish.name}
              </Text>
              <Text className=" font-semibold text-base ">₵ {dish.price}</Text>
              <TouchableOpacity className="p-1 rounded-full bg-brand">
                <Feather name="minus" size={20} color="white" />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
      {/* total */}
      <View className="p-6 px-8 rounded-t-3xl gap-y-4 bg-brand-opacity20 pb-12">
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Subtotal</Text>
          <Text className="text-gray-700">₵20</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Delivery Fee</Text>
          <Text className="text-gray-700">₵2</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700 font-extrabold">Order Total</Text>
          <Text className="text-gray-700 font-extrabold">₵22</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={handlePlaceOrder}
            className="bg-brand p-3 rounded-full"
          >
            <Text className="text-white font-bold text-center">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;
