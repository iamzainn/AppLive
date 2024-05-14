import { ActivityIndicator, View } from 'react-native'
import React from 'react'
import { getSports } from '@/utils/f'
import { useQuery } from '@tanstack/react-query'


const index = () => {

   const {data,isLoading,isError} = useQuery({
    queryKey:['Sports'],
    queryFn:()=>getSports(),
   })


   if(isLoading){
    return <ActivityIndicator style={{flex:1, alignItems:"center",justifyContent:"center"}}></ActivityIndicator>
   }

  return (
    <View style={{ flex: 1,  backgroundColor:"white"}}>
      
    </View>
  )
}

export default index