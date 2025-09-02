import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { useCartStore } from "../store";

const { width, height } = Dimensions.get("screen");
const DishRow = ({ item }) => {
  // Zustant hooks
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const items = useCartStore((state) => state.items);

  const totalItems = items.filter((cartItem) => cartItem.id === item.id);

  const handleIncrease = () => {
    addToCart({ ...item });
  };
  const handleDecrease = () => {
    removeFromCart({ id: item.id });
  };
  return (
    <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mx-2 mb-3">
      <Image
        className="rounded-3xl"
        style={{ height: height * 0.12, width: width * 0.27 }}
        source={item.image}
      />
      <View className="flex flex-1 gap-y-3">
        <View className="pl-3">
          <Text className="text-xl">{item.name}</Text>
          <Text className="text-gray-700"> {item.description}</Text>
        </View>
        <View className="flex-row justify-between pl-3 items-center">
          <Text className="text-gray-700 text-lg font-bold">₵{item.price}</Text>
          <View className="flex-row items-center">
            <TouchableOpacity
              disabled={!totalItems.length}
              className="p-1 rounded-full bg-brand"
              onPress={handleDecrease}
            >
              <Feather name="minus" size={20} color="white" />
            </TouchableOpacity>
            <Text className="px-3">{totalItems.length}</Text>
            <TouchableOpacity
              className="p-1 rounded-full bg-brand"
              onPress={handleIncrease}
            >
              <Feather name="plus" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DishRow;
