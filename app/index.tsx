import { generateAPIUrl } from "@/utils";
import { useChat } from "@ai-sdk/react";
import { fetch as expoFetch } from "expo/fetch";
import {
  View,
  TextInput,
  ScrollView,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useColorScheme } from "nativewind";

export default function App() {
  const { messages, error, handleInputChange, input, handleSubmit } = useChat({
    fetch: expoFetch as unknown as typeof globalThis.fetch,
    api: generateAPIUrl("/api/chat"),
    onError: (error) => console.error(error, "ERROR"),
  });

  const { colorScheme } = useColorScheme();

  if (error) return <Text>{error.message}</Text>;

  return (
    <SafeAreaView className="h-full bg-white text-black dark:bg-black dark:text-white">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <View className="flex h-full flex-col">
          <ScrollView className="flex-1 px-8">
            {messages.map((m) => (
              <View key={m.id} className="my-8">
                <View>
                  <Text className="font-bold text-black dark:text-white">
                    {m.role}
                  </Text>
                  <Text className="text-black dark:text-white">
                    {m.content}
                  </Text>
                </View>
              </View>
            ))}
          </ScrollView>

          <View className="my-6 px-4">
            <TextInput
              className="rounded-md bg-neutral-100 px-2 py-2 text-black dark:bg-gray-800 dark:text-white"
              placeholder="Say something..."
              placeholderTextColor={colorScheme === "dark" ? "#ccc" : "#666"}
              value={input}
              onChange={(e) =>
                handleInputChange({
                  ...e,
                  target: {
                    ...e.target,
                    value: e.nativeEvent.text,
                  },
                } as unknown as React.ChangeEvent<HTMLInputElement>)
              }
              onSubmitEditing={(e) => {
                handleSubmit(e);
                e.preventDefault();
              }}
              autoFocus={true}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
