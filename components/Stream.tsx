import React, {  useEffect } from 'react';
import { SafeAreaView, Platform } from 'react-native';

import { WebView } from 'react-native-webview';

type Props = {
  url: string;
};

const StreambtwIframe = ({ url }: Props) => {
 
  useEffect(() => {
    

    
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
        allowsFullscreenVideo={true}
        androidHardwareAccelerationByDefault={Platform.OS === 'android'}
        allowsBackForwardNavigationGestures={true}
      />
    </SafeAreaView>
  );
};

export default StreambtwIframe;