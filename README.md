# Welcome to Mistral's Le Chat mobile app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Project overview

Mistral's Le Chat is a proof-of-concept (POC) chat application built with Expo and AI SDK, powered by Mistral AI. This app enables users to engage in chatbot conversations, with AI-generated responses tailored to their input.

## Features

- ✨ **Mistral AI Integration** - Seamless AI-powered chatbot experience using AI SDK by Vercel
- 👨‍💻 **Built with Expo** - Leverage the flexibility of Expo for cross-platform development
- 🌈 **NativeWind Styling** - Utility-first styling for rapid and responsive UI design

## Demo

![App Screenshot](/assets/images/demo.png)

## Get started

Follow these steps to set up and run the project:

### 1. Clone the repository

```bash
git clone https://github.com/skmpf/lechat-app.git
```

### 2. Install dependencies

```bash
cd lechat-app
pnpm install
```

### 3. Start the app

```bash
npx expo start
```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

### 4. Configure Mistral AI API Key

1. Obtain a Mistral AI API key from [Mistral Console](https://console.mistral.ai/api-keys/).
2. Create a `.env.local` file at the project root.
3. Add your API key:

   ```plaintext
   MISTRAL_API_KEY=your_api_key_here
   ```

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request if you have improvements or find any bugs.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
