import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { APIConstants, colors, fonts, images } from '../constants'
import { StaticImageService } from '../services'
import { display } from '../utils'

const CountryCard = ({name,code,callingCode,onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.5}
    onPress={onPress}
     style={styles.countryCardContainer}>
        <Image source={{uri:StaticImageService.getFlagIcon(code)}}
      style={styles.imageFlag}
       />
          <Text style={styles.callingCodeText}>{callingCode}</Text>
     <Text style={styles.countryNameText}>{name}</Text>
    </TouchableOpacity>
  )
}

export default CountryCard

const styles = StyleSheet.create({
    countryCardContainer:{
        flexDirection:'row',
       margin:5,
        paddingVertical:10,
        justifyContent:'flex-start',
        alignItems:'center',borderRadius:20,
        backgroundColor:colors.LIGHT_GREY2,
        flex:1
    },
    imageFlag: {width:30,height:20},
    callingCodeText:{
       width:display.setWidth(20),
       paddingHorizontal:10,
       fontFamily:fonts.Bitter_Medium,
       fontSize:16,
       color:colors.DEFAULT_GREY
    },
    countryNameText:{
        fontFamily:fonts.Bitter_Medium,
        fontSize:16,
        color:colors.DEFAULT_BLACK
    }
})