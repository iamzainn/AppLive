import { Button, StyleSheet, Text, View } from 'react-native';


import { useAuth, useUser } from "@clerk/clerk-expo";

import React from 'react';

export default function TabTwoScreen() {
  
  



  const {  isLoaded,isSignedIn, user } = useUser();
  const { signOut } = useAuth();
  if (!isLoaded || !isSignedIn) {
    return null;
  }


  return (
    <View style={styles.container}>
     <Text style={{marginVertical:20}}>{user.fullName as string}</Text>
     <Button
        title="Sign Out"
        onPress={() => {
          signOut();
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"white"
  },
 
});
