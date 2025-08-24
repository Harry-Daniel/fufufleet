import { StatusBar } from "expo-status-bar";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import Categories from "../components/categories";
import { featured } from "../constants";
import FeaturedRow from "../components/featuredRow";

// Note: In app.js , change the "scheme" to match your project name.

const ios = Platform.OS === "ios";
const Home = () => {
  return (
    <SafeAreaView className={`bg-white ${ios ? "" : "mt-2"}`}>
      <StatusBar style="dark" />
      {/* search bar */}
      <View className="flex-row items-center  px-4 pb-2 gap-2">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
          <Feather name="search" size={24} color="black" />
          <TextInput placeholder="Restaurants" className="ml-2 flex-1" />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
            <Feather name="map-pin" size={20} color="gray" />
            <Text className="text-gray-600">Accra,GH</Text>
          </View>
        </View>
        <View className="p-3 bg-brand  rounded-full">
          <Feather name="sliders" size={20} color="white" />
        </View>
      </View>

      {/* main */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      >
        {/* categories */}
        <Categories />

        {/* featured */}
        <View className="mt-5 mb-20">
          {[featured, featured, featured].map((item, index) => {
            return <FeaturedRow 
            key={index} 
            title={item.title} 
            restaurants={item.restaurants} 
            description={item.description}/>
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
