import React from "react";
import * as WebBrowser from "expo-web-browser";
import {  Button,View,Text,StyleSheet } from "react-native";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "@/hooks/useWarmUpBrowser";
import { useState } from "react";




WebBrowser.maybeCompleteAuthSession();


export const SignInWithOAuth = () => {
  const [isloading,setIsLoading] = useState(false);
 
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      setIsLoading(true);
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive!({ session: createdSessionId });
      } else {
      
      }
    } catch (err) {
      console.error("OAuth error", err);

    }
    finally{
      setIsLoading(false);
    }
  }, []);

  return (
    <View style={styles.container}>
    
      <Text style={styles.title}>Welcome to Your App!</Text>
      <Button title="Sign in with Google" onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});