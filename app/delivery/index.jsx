import { View, Text, Dimensions } from "react-native";
import { featured } from "../../constants/index";
import { useRouter } from "expo-router";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

const { width, height } = Dimensions.get("screen");
const DeliveryScreen = () => {
  const restaurant = featured.restaurants[0];
  const router = useRouter();
  return (
    <View className="flex-1" style={{ width: width, height: height }}>
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.lng,
          latitudeDelta: 0.01, // zoomed OUT (city / country level)
          longitudeDelta: 0.01,
        }}
        className="flex-1"
        mapType="standard"
        style={{ width: width, height: height }}
        provider={PROVIDER_GOOGLE}
      >
        <Marker
        coordinate={{
            latitude:restaurant.lat,
            longitude:restaurant.lng
        }}
        title={restaurant.name}
        description={restaurant.description}
       
        />
      </MapView>
    </View>
  );
};

export default DeliveryScreen;
