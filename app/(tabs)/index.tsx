import { ActivityIndicator, FlatList, View,Text } from 'react-native'
import React from 'react'
import { getSports } from '@/utils/f'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'expo-router'


const index = () => {

   const {data:Sports,isLoading,isError} = useQuery({
    queryKey:['Sports'],
    queryFn:()=>getSports(),
   })


   if(isLoading){
    return <ActivityIndicator style={{flex:1, alignItems:"center",justifyContent:"center"}}></ActivityIndicator>
   }

  return (
    <View style={{ flex: 1,  backgroundColor:"white"}}>
      <FlatList data={Sports}  renderItem={({item})=>
      
      <Link style={{padding:20}} asChild href={`/StreamScreen?url=${item.live_link}`}><Text>{item.name}</Text></Link>}/>
    </View>
  )
}

export default index