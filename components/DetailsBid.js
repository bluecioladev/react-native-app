import { View, Text,Image } from 'react-native'
import { EthPrice } from './SubInfo'
import { COLORS,SIZES,FONTS } from '../constants'
import React from 'react'

const DetailsBid = ({bid}) => {
  return (
    <View style={{
      width:'100%',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      marginVertical:SIZES.base,
      paddingHorizontal:SIZES.base * 2,
    }}>
      <Image
      source={bid.image}
      resizeMode='contain'
      style={{width:48,height:48}}
      />

      <View>
        <Text style={{
          fontFamily:FONTS.semiBold,
          fontSize:SIZES.small,
          color:COLORS.primary
        }}>
          Bid Place by {bid.name}
        </Text>
        <Text style={{
          fontFamily:FONTS.regular,
          fontSize:SIZES.small,
          color:COLORS.secondary,
          marginTop:3
        }}>
          Bid Place by {bid.date}
        </Text>

        <EthPrice price={bid.price}/>
        
      </View>
    </View>
  )
}

export default DetailsBid