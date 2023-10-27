import { View, Text, Image, TextInput, } from 'react-native'
import React from 'react'

const Sukses = () => {
  return (
 <View>
         
         <View style={{alignItems: 'center', paddingTop: 114,}} >
          <Image style={{width: 120, height: 120, }} source={require('../assets/images/correct1.png')} />
         </View>

         <View>
          <Text style={{textAlign: 'center', paddingTop: 23, fontSize: 25, fontWeight: 'bold', color: 'black'}}>Pemesanan Sukses !</Text>
          <Text style={{textAlign: 'center', paddingTop: 13, fontSize: 16, color: 'gray', paddingHorizontal: 16,}}>Pesanan anda telah diterima dan akan segera 
diproses. Mohon ditunggu ya...</Text>
         </View>

         <View >
          <Text
          style={{
            height: 52, 
            backgroundColor: 'red', 
            marginHorizontal: 16,
             borderRadius: 16, 
             marginTop: 625, 
             flexDirection: 'row', 
             justifyContent: 'space-between',
             alignItems: 'center',
             paddingHorizontal: 10,
             paddingVertical: 16,
             color: 'white',
             textAlign: 'center',
             fontSize: 16,
             fontWeight: 'bold',
             }}> Konfirmasi Pemesanan </Text>
          </View>




 </View>
    

  )
}

export default Sukses