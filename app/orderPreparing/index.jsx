import { View, Text, Dimensions } from "react-native";
import bikeguy from "../../assets/images/bikeguy.gif";
import { Image } from "expo-image";
import { useEffect } from "react";
import { useRouter } from "expo-router";

const { height } = Dimensions.get("screen");
const OrderPreparingScreen = () => {
    const router = useRouter()
  useEffect(() => {
    setTimeout(()=>{
router.push({pathname:"/delivery"})
    },5000)
  }, [])
  

  return (
    <View
      className=" bg-white justify-center items-center"
      style={{ height: height }}
    >
      <Image source={bikeguy} style={{ width: 200, height: 200 }} />
    </View>
  );
};

export default OrderPreparingScreen;
