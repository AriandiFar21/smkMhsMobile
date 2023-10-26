import { View, Text, Image } from 'react-native'
import React from 'react'

const App = () => {
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
          
          <Image source={require('../AwesomeProject/src/assets/images/ImageMHS.png')} />
          <Image source={require('../AwesomeProject/src/assets/images/Frame.png')}  
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

      <View style=
      {{flexDirection: 'row',
       paddingTop: 12, 
       justifyContent: 'center'}}>
        
      <Image style=
      {{marginRight: 16, }} source={require('../AwesomeProject/src/assets/images/burger.png')} />
          <Image source={require('../AwesomeProject/src/assets/images/masgor.png')}  /> 
      </View>

      <View>
      <Text style=
      {{paddingTop: 10, 
      fontSize: 14, 
      color: 'black', 
      marginHorizontal: 16,}}>Burger Ayam </Text>

      <Text 
      style={{
        paddingTop: 4, 
        fontSize: 14,
         color: 'black', 
         marginHorizontal: 16,}}>Rp 45.000 </Text>
      </View>
      

      <View 
      style={{
        flexDirection: 'row',
         paddingTop: 12, 
         justifyContent: 'center'}} >
      <Image style={{
        marginRight: 16,
         width: 158, 
         height: 140,}} 
         source={require('../AwesomeProject/src/assets/images/burger.png')} />
          <Image source={require('../AwesomeProject/src/assets/images/masgor.png')}  />
      </View>
      
          

      </View>
    </View>
    
    


  )
}

export default App