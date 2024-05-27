
import registerNNPushToken from 'native-notify';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';

import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';


import { QueryClient, QueryClientProvider,useQueryClient } from '@tanstack/react-query';

import Constants from "expo-constants";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import SigninScreen from '@/Screens/SigninScreen';
import * as SecureStore from "expo-secure-store";

const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};


export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ClerkProvider
  tokenCache={tokenCache}
  publishableKey={Constants.expoConfig?.extra?.clerkPublishableKey as string}>
      <SignedIn>
        <RootLayoutNav />
      </SignedIn>
      <SignedOut>
        <SigninScreen />
      </SignedOut>
  </ClerkProvider>
  )
  
}

function RootLayoutNav() {
  registerNNPushToken(21498, '5hVMJXdtUJ7FE8wCK5kYf1');

  
  const client = new QueryClient();


  return (
  
      <QueryClientProvider client={client} >
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
             </Stack>
      </QueryClientProvider>
    
  );
}


