import { SafeAreaView, Text } from 'react-native'
import React from 'react'
import StreambtwIframe from '@/components/Stream'
import { useLocalSearchParams,  } from 'expo-router';

const StreamScreen = () => {
  const { url } = useLocalSearchParams();
  return (
    <SafeAreaView style={{flex:1, justifyContent:"center",alignItems:"center",backgroundColor:"blue"}} >
      <StreambtwIframe url={url as string} ></StreambtwIframe>
    </SafeAreaView>
  )
}

export default StreamScreen