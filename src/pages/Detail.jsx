import { View, Text, Image, TextInput, } from 'react-native'
import React from 'react'

const Detail = () => {
  return (

 <View style={{paddingHorizontal: 16, paddingTop: 24}}>
  <View style={{
  backgroundColor: 'red',
  height: 60,
  width: 60,
  borderRadius: 100,}}>

    <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
    <Image style={{marginTop: 6, marginHorizontal: 3, width: 50, height:50,}} source={require('../assets/images/Frame2.png')} />
    <Text style={{marginTop: 20,}}>Kembali</Text>
    </View>
    
  </View>
  <View>
    
  </View>



    <View style={{alignItems: 'center', paddingTop: 104,}}>
    <Image style={{width: 435, height: 400, borderRadius: 7, }} source={require('../assets/images/burger.png')} />
    </View>

    <View style={{paddingHorizontal: 16, flexDirection: 'row', justifyContent: 'space-between'  }}>
      <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black', paddingTop: 12}}>Burger Ayam </Text>
      <Text style={{fontSize: 18,  fontWeight: 'bold', color: 'red', paddingTop: 12 }}>Rp. 45.000 </Text>
      </View>

      <View style={{marginHorizontal: 16, paddingTop: 12,}}>
        <Text>Hamburger atau burger adalah sejenis roti</Text>
        <Text>berbentuk bundar yang diiris dua, Dan di </Text>
        <Text>tengahnya diisi dengan patty yang</Text>

      </View>

      <View style={{paddingTop: 38, paddingHorizontal: 16,}}>
        <Text>Masukkan Jumlah Pesanan</Text>
      </View>

      <View style={{paddingTop: 10, paddingHorizontal: 16,}}>
        <TextInput style={{
              borderColor: 'gray',
              width: "100%",
              borderWidth: 1,
              borderRadius: 7,
              padding: 10,
          }} >
          <Text>Masukkan Angka</Text>
        </TextInput>
      </View>

      <View >
          <Text
          style={{
            height: 52, 
            backgroundColor: 'red', 
            marginHorizontal: 16,
             borderRadius: 16, 
             marginTop: 151, 
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

export default Detail