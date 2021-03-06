import React from 'react';
import Loading from "./Loading";
import Weather from "./Weather";
import {Alert} from "react-native";
import * as Location from "expo-location";
import axios from "axios";
const API_KEY = "8f5a8ce44d71f789533d6e021c12def4";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async(latitude, longitude) =>{
      const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=matric`
    );
    this.setState({isLoading:false, temp:data.main.temp});
  }
  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude)
    } catch (error) {
      Alert.alert("Can't find you", "So sad");
    }
  };
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const{isLoading, temp} = this.state;
    return isLoading?<Loading/>:<Weather temp = {temp}/>;
  }
}