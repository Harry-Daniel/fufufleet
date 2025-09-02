import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
import { useCartStore } from "../store";

const CartIcon = () => {
  const router = useRouter();
  const cartItems = useCartStore((state) => state.items);
  const totalPrice = cartItems.reduce(
    (total, item) => (total = total + item.price),
    0
  );

  // console.log(totalPrice);

  if (!cartItems.length) {
    return;
  }

  const handlePress = () => {
    router.push({ pathname: "/cart" });
  };
  return (
    <View className="absolute bottom-14 w-full z-50">
      <TouchableOpacity
        onPress={handlePress}
        className="bg-brand flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg"
      >
        <View
          className="p-2 px-4 rounded-full"
          style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
        >
          <Text className="font-extrabold text-white text-lg">
            {cartItems.length}
          </Text>
        </View>
        <Text className="flex-1 text-center font-extrabold text-white text-lg">
          View Cart
        </Text>
        <Text className="font-extrabold text-white text-lg">₵{totalPrice}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartIcon;
