import "dotenv/config";

export default {
  expo: {
    scheme: "FufuFleet",
    name: "fufufleet",
    slug: "fufufleet",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/msh.png",
    userInterfaceStyle: "light",
    newArchEnabled: true,
    splash: {
      image: "./assets/msh.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      config: {
        googleMaps: {
          apiKey: process.env.GOOGLE_MAPS_API_KEY,
        },
      },
      edgeToEdgeEnabled: true,
      package: "com.harryd.fufufleet",

      permissions: [],
    },
    web: {
      bundler: "metro",
      favicon: "./assets/favicon.png",
    },
    plugins: ["expo-router"],
    extra: {
      router: {},
      eas: {
        projectId: "1965d5fc-9dfd-4bb8-9673-0121aca9233d",
      },
    },
  },
};
