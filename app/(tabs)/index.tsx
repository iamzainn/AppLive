import { ActivityIndicator, FlatList, View,Text } from 'react-native'
import React from 'react'
import { getSports } from '@/utils/f'
import { useQuery } from '@tanstack/react-query'

import SportItem from '@/components/SportItem'


const index = () => {
   const {data:Sports,isLoading} = useQuery({
    queryKey:['Sports'],
    queryFn:()=>getSports(),
   })


   if(isLoading){
    return <ActivityIndicator style={{flex:1, alignItems:"center",justifyContent:"center"}}></ActivityIndicator>
   }

  return (
    <View style={{ flex: 1,  backgroundColor:"white" ,padding:20}}>
      <FlatList
      data={Sports}
      renderItem={({ item }) => <SportItem item={item} />}
      keyExtractor={(item) => item.id.toString()} // Use ID for unique keys
    />
    </View>
  )
}

export default index