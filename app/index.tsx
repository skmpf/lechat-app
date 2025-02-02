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

export default function App() {
  const { messages, error, handleInputChange, input, handleSubmit } = useChat({
    fetch: expoFetch as unknown as typeof globalThis.fetch,
    api: generateAPIUrl("/api/chat"),
    onError: (error) => console.error(error, "ERROR"),
  });

  if (error) return <Text>{error.message}</Text>;

  return (
    <SafeAreaView className="h-full">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <View className="flex h-full flex-col">
          <ScrollView className="flex-1 px-8">
            {messages.map((m) => (
              <View key={m.id} className="my-8">
                <View>
                  <Text className="font-bold">{m.role}</Text>
                  <Text>{m.content}</Text>
                </View>
              </View>
            ))}
          </ScrollView>

          <View className="my-6 px-4">
            <TextInput
              className="rounded-md bg-white px-2 py-2"
              placeholder="Say something..."
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
