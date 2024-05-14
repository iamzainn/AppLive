import React, { useState, useEffect } from 'react';
import { SafeAreaView, Dimensions, Platform } from 'react-native';

import { WebView } from 'react-native-webview';

type Props = {
  url: string;
};

const StreambtwIframe = ({ url }: Props) => {
  const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);
  const [screenHeight, setScreenHeight] = useState(Dimensions.get('window').height);
  
  useEffect(() => {
    const updateDimensions = () => {
      setScreenWidth(Dimensions.get('window').width);
      setScreenHeight(Dimensions.get('window').height);
    };
    Dimensions.addEventListener('change', updateDimensions);

    
  }, []);

  const iframeUrl = url 

  return (
    <SafeAreaView style={{ width: "100%", height: "100%", flex:1 }}>
      <WebView
       
        source={{ uri: iframeUrl }}
        style={{ flex: 1 , alignContent:"center",justifyContent:"center" , alignItems:"center"}} 
        javaScriptEnabled={true}
        domStorageEnabled={true}
        originWhitelist={['https://streambtw.com']}
        allowsInlineMediaPlayback={true}
        androidHardwareAccelerationByDefault={Platform.OS === 'android'}

      />
    </SafeAreaView>
  );
};

export default StreambtwIframe;