import React, { useState, useEffect } from 'react';
import { View, Dimensions, Platform } from 'react-native';

import { WebView } from 'react-native-webview';

const StreambtwIframe = () => {
  const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);
  const [screenHeight, setScreenHeight] = useState(Dimensions.get('window').height);
  
  useEffect(() => {
    const updateDimensions = () => {
      setScreenWidth(Dimensions.get('window').width);
      setScreenHeight(Dimensions.get('window').height);
    };
    Dimensions.addEventListener('change', updateDimensions);

    
  }, []);

  const iframeUrl = 'https://streambtw.com/iframe/e1.php' 

  return (
    <View style={{ width: screenWidth, height: screenHeight }}>
      <WebView
        source={{ uri: iframeUrl }}
        style={{ flex: 1 }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        originWhitelist={['https://streambtw.com']}
        allowsInlineMediaPlayback={true}
        androidHardwareAccelerationByDefault={Platform.OS === 'android'}

      />
    </View>
  );
};

export default StreambtwIframe;