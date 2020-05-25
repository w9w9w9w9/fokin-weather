import React from "react";
import {View, Text, StyleSheet, StatusBar} from "react-native";
import PropTypes from "prop-types";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {LinearGradient} from "expo-linear-gradient";

const weatherOptions = {
    Haze:{
        iconName:"weather-hail",
        gradient: ["#4DA0B0", "#D39D38"]
    },
    ThunderStorm:{
        iconName:"",
        gradient: ["#4DA0B0", "#D39D38"]
    },
    Drizzle:{
        iconName:"",
        gradient: ["#4DA0B0", "#D39D38"]
    },
    Rain:{
        iconName:"",
        gradient: ["#4DA0B0", "#D39D38"]
    },
    Snow:{
        iconName:"",
        gradient: ["#4DA0B0", "#D39D38"]
    },
    Atmosphere:{
        iconName:"",
        gradient: ["#4DA0B0", "#D39D38"]
    },
    Clear:{
        iconName:"",
        gradient: ["#4DA0B0", "#D39D38"]
    },
    Clouds:{
        iconName:"",
        gradient: ["#4DA0B0", "#D39D38"]
    },
    Haze:{
        iconName:"",
        gradient: ["#4DA0B0", "#D39D38"]
    },
    Dust:{
        iconName:"",
        gradient: ["#4DA0B0", "#D39D38"]
    },
    Mist:{
        iconName:"weather-hail",
        gradient: ["#4DA0B0", "#D39D38"]
    }
}

export default function Weather({temp}){
    return (
        <View style = {styles.container}>
            <LinearGradient colors={WeatherOptions[condition].gradient} styles={styles.container}>
                <StatusBar barStyle="light-content"/>
                <View style={styles.halfcontainer}>
                    <MaterialCommunityIcons name={WeatherOptions[contidion].iconName} size={96} color="white"/>
                    <Text style = {styles.temp}>{temp}º</Text>
                </View>
                <View style={{...styles.halfcontainer, ...styles.textContainer}}>
                    <Text style={styles.title}></Text>
                    <Text style={styles.subtitle}></Text>
                </View>
            </LinearGradient>
        </View>
    );
}

Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    condition:PropTypes.oneOf(["ThunderStorm","Drizzle","Rain","Snow","Atmosphere","Clear","Clouds", "Haze", "Dust", "Mist"]).isRequired
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    temp:{
        fontSize: 42,
        color:"white"
    },
    halfcontainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
        color:"white",
        fontSize:44,
        fontWeight:"300",
        marginBottom:10
    },
    subtitle:{
        color:"white",
        fontWeight:"600",
        fontSize:24,
    },
    textContainer:{
        paddingHorizontal:20,
        alignItems:"flex-start"
    }
})