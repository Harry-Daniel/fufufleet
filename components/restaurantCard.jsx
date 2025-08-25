import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import fullstar from "../assets/icons/fullstar.png";
import { useRouter } from "expo-router";

const { height, width } = Dimensions.get("screen");
const RestaurantCard = ({ item }) => {
  const router = useRouter();
  const handlePress = () => {
    router.push({ pathname: "/restaurant", params: { params: JSON.stringify({ ...item }) } });
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View
        className="mr-6 bg-white rounded-3xl shadow-lg shadow-brand"
        style={{ shadowRadius: 7 }}
      >
        <Image
          style={{
            height: height * 0.18,
            width: width * 0.6,
          }}
          className=" rounded-t-3xl"
          source={item.image}
        />
        <View className="px-3 pb-4 space-y-2">
          <Text className="text-lg font-bold pt-2">{item.name}</Text>
          <View className="flex-row items-center space-x-1">
            <Image source={fullstar} className="w-8 h-8" />
            <Text className="text-green-700">{item.stars} </Text>
            <Text className="text-gray-700">
              ({item.reviews} reviews) •{" "}
              <Text className="font-semibold">{item.category}</Text>
            </Text>
          </View>
          <View className="flex-row items-center gap-x-1">
            <Feather name="map-pin" color="black" size={16} />
            <Text className="text-gray-700 text-xs">
              Nearby • {item.address}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RestaurantCard;
