import { SafeAreaView, Text } from 'react-native'
import React from 'react'
import StreambtwIframe from '@/components/Stream'
import { useLocalSearchParams,  } from 'expo-router';

const StreamScreen = () => {
  const { url } = useLocalSearchParams();
  return (
    <SafeAreaView style={{flex:1, justifyContent:"center",alignItems:"center",backgroundColor:"white"}} >
      <StreambtwIframe url={url as string} ></StreambtwIframe>
      {/* <Text style={{flex:1}}>Full Width</Text> */}
    </SafeAreaView>
  )
}

export default StreamScreen