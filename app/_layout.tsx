import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import "../global.css";
import { Pressable, Text } from "react-native";
import { useColorScheme } from "nativewind";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  const { colorScheme, setColorScheme } = useColorScheme();
  const toggleTheme = () =>
    setColorScheme(colorScheme === "dark" ? "light" : "dark");

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "😸 Le Chat",
            headerStyle: {
              backgroundColor: colorScheme === "dark" ? "#1a1a1a" : "#f0f0f0",
            },
            headerTintColor: colorScheme === "dark" ? "#ffffff" : "#000000",
            headerRight: () => (
              <Pressable onPress={toggleTheme} className="p-2">
                <Text className="text-lg dark:text-white">
                  {colorScheme === "dark" ? "☀️" : "🌙"}
                </Text>
              </Pressable>
            ),
          }}
        />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
