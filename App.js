// fokin weather app project

import React from 'react';
import {Alert, BackHandler} from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';

import Loading from "./loading";
import Weather from "./weather";

// OpenWeatherMap API Key
const API_KEY = "f86ed7a30a9a87f1921400d292b0d3a1";
export default class extends React.Component 
{
  state = 
  {
    isLoading: true
  };

  // async - await 함수 사용
  // OpenWeatherMap을 통해 날씨 정보를 얻는 메서드
  getWeather = async(latitude, longitude) =>
  {
    const {data: {main : {temp}, weather}} = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&lang=kr&APPID=${API_KEY}`
    );
    this.setState({
      isLoading: false, 
      temp, 
      condition: weather[0].main,
    });
  }

  // Expo API의 Location 관련 메서드를 이용해 위치 정보를 얻는 메서드
  getLocation = async() =>
  {
    try
    {
      // Permission이 거부되면 throw error
      await Location.requestPermissionsAsync();

      // Location 상수에 저장
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      
      // API에 위도와 경도 전송 (날씨 정보 얻기)
      this.getWeather(latitude, longitude);
    }
    catch (error) // Permission 거부 시 실행 : 메세지 표시 및 앱 종료
    {
      Alert.alert(
        "위치 사용 권한이 거부됨", "위치 사용 권한을 허용하지 않는다면 이 앱을 사용할 수 없어요 :(", [{text: '알겠습니다', onPress: () => BackHandler.exitApp()}]
        );
    }
  }

  componentDidMount()
  {
    this.getLocation();
  }

  render()
  {
    let { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition}/>;
  }
}
