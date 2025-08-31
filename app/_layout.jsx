import "../global.css";
import { Slot } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
const RootLayout = () => {
  return (
    <View className="mb-8">
      <Slot />
    </View>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
