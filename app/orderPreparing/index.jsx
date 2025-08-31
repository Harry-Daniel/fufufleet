import { View, Text, Dimensions } from "react-native";
import bikeguy from "../../assets/images/bikeguy2.gif";
import { Image } from "expo-image";
import { useEffect } from "react";
import { useRouter } from "expo-router";

const { height } = Dimensions.get("screen");
const OrderPreparingScreen = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push({ pathname: "/delivery" });
    }, 5000);
  }, []);

  return (
    <View
      className=" bg-white justify-center items-center gap-10"
      style={{ height: height }}
    >
      <Image source={bikeguy} style={{ width: 200, height: 200 }} />

      <Text className="font-bold text-lg text-gray-300">Preparing Order . . .</Text>
    </View>
  );
};

export default OrderPreparingScreen;
