import { View, Text, Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View>
      <View 
      style={{
        height: 52, 
        backgroundColor: 'red', 
        marginHorizontal: 16,
         borderRadius: 99, 
         marginTop: 16, 
         flexDirection: 'row', 
         justifyContent: 'space-between',
         alignItems: 'center',
         paddingHorizontal: 10,
         paddingVertical: 16,
         }}>
          
          <Image source={require('../assets/images/ImageMHS.png')} />
          <Image source={require('../assets/images/Frame.png')}  
          style={{
            width: 24, 
            height: 24, 
            marginRight: 16, 
            }}  />

      </View>
      <Text style={{
        paddingTop: 32, 
        fontSize: 14, 
        color: 'black', 
        marginHorizontal: 16,
        }}>Selamat datang di </Text>

      <Text 
      style={{
        paddingTop: 8, 
        fontSize: 32, 
        fontWeight: 'bold', 
        color: 'black', 
        marginHorizontal: 
        16,}}>KANTIN MULTISTUDI </Text>

      <View>
      <Text 
      style=
      {{paddingTop: 32, 
      fontSize: 14,
       color: 'black', 
       marginHorizontal: 16, 
       fontWeight: 'bold',
       }}>Menu Makanan  </Text>

      <View style={{paddingTop: 12, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 16,}} >
<TouchableOpacity onPress={() => navigation.navigate('Detail')}  >
<Image style={{width: 216, height: 216, borderRadius: 7, }} source={require('../assets/images/burger.png')} />
</TouchableOpacity>
     
          <Image  style={{width: 216, height: 216, borderRadius: 7,}} source={require('../assets/images/masgor.png')}  /> 
      
      </View>
      <View style={{paddingHorizontal: 16, flexDirection: 'row', justifyContent: 'space-between'  }}>
      <Text style={{fontSize: 14, fontWeight: 'bold', color: 'black', paddingTop: 4}}>Burger Ayam </Text>
      <Text style={{fontSize: 14,  fontWeight: 'bold', color: 'black', paddingTop: 4 }}>Nasgor Gacor Cik </Text>
      </View>
      <View style={{paddingHorizontal: 16, flexDirection: 'row', justifyContent: 'space-between'  }} >
      <Text style={{fontSize: 14,  fontWeight: 'bold', color: 'red', paddingTop: 4 }} >Rp 45.000 </Text>
      <Text style={{fontSize: 14,  fontWeight: 'bold', color: 'red',paddingTop: 4, marginHorizontal: 55, }} >Rp 20.000 </Text>  
      </View>
   

 
      

      <Text 
      style=
      {{paddingTop: 102, 
      fontSize: 14,
       color: 'black', 
       marginHorizontal: 16, 
       fontWeight: 'bold',
       }}>Menu Minuman  </Text>

      
      <View style={{paddingTop: 12,flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 16,}} >
      <Image style={{width: 216, height: 216, borderRadius: 7,}} source={require('../assets/images/tehobeng.png')} />
          <Image style={{width: 216, height: 216, borderRadius: 7,}} source={require('../assets/images/kukubima.png')}  />
      </View>
      <View style={{paddingHorizontal: 16, flexDirection: 'row', justifyContent: 'space-between'  }}>
      <Text style={{fontSize: 14, fontWeight: 'bold', color: 'black', paddingTop: 4}} > Teh Obeng Segar </Text>
      <Text style={{fontSize: 14,  fontWeight: 'bold', color: 'black', paddingTop: 4}} > Kuku Bims Bisa gak </Text>
      </View>
      <View style={{paddingHorizontal: 16, flexDirection: 'row', justifyContent: 'space-between'  }} >
      <Text style={{fontSize: 14,  fontWeight: 'bold', color: 'red', paddingTop: 4 }}>Rp10.000</Text>
      <Text style={{fontSize: 14,  fontWeight: 'bold', color: 'red', marginHorizontal: 80, paddingTop: 4 }}>Rp15.000</Text>  
      </View>
   
      
      <View style={{alignItems: 'center', paddingTop: 25, }} >
      <Text style={{fontSize: 14,  fontWeight: 'bold',}}>Copyright : Fariel Pacar Zetta</Text>
      </View>

      </View>
    </View>
    
    


  )
}

export default Home