
import {  supabase } from "./db";
import { Sports } from "./types";




export const getSports = async():Promise<Sports[]| undefined>=>{
    
    let { data: Sports} = await supabase
    .from('Sports')
    .select('*')
    if(Sports){

      console.log(JSON.stringify(Sports));
      return Sports as Sports[]
    } 


       }

   
      

