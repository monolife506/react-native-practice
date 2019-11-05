import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import propTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions =
{
    // 맑음
    // +. 시간대에 따라 다른 아이콘 출력
    Clear:
    {
        iconName: "weather-sunny",
        gradient: ["#f7b733", "#fc4a1a"]
    },
    Clear_Night:
    {
        iconName: "weather-night",
        gradient: ["#414345", "#232526"]
    },

    // 비나 천둥/번개
    Rain:
    {
        iconName: "weather-pouring",
        gradient: ["#1488CC", "#2B32B2"]
    },
    Drizzle:
    {
        iconName: "weather-rainy",
        gradient: ["#2F80ED", "#56CCF2"]
    },
    Thunderstorm:
    {
        iconName: "weather-lightning-rainy",
        gradient: ["#A6FFCB", "#12D8FA", "#1FA2FF"]
    },

    // 눈
    Snow:
    {
        iconName: "weather-snowy",
        gradient: ["#86fde8", "#acb6e5"]
    },

    // 대기 상태
    Mist:
    {
        iconName: "weather-fog",
        gradient: ["#D3959B", "#BFE6BA"]
    },
    Smoke:
    {
        iconName: "weather-fog",
        gradient: ["#D3959B", "#BFE6BA"]
    },
    Haze:
    {
        iconName: "weather-fog",
        gradient: ["#D3959B", "#BFE6BA"]
    },
    Dust:
    {
        iconName: "weather-fog",
        gradient: ["#D3959B", "#BFE6BA"]
    },
    Fog:
    {
        iconName: "weather-fog",
        gradient: ["#D3959B", "#BFE6BA"]
    },
    Sand:
    {
        iconName: "weather-fog",
        gradient: ["#D3959B", "#BFE6BA"]
    },
    Ash:
    {
        iconName: "weather-fog",
        gradient: ["#D3959B", "#BFE6BA"]
    },
    Squall:
    {
        iconName: "weather-fog",
        gradient: ["#D3959B", "#BFE6BA"]
    },
    Tornado:
    {
        iconName: "weather-hurricane",
        gradient: ["#004e92", "#000428"]
    },

    // 흐림
    Clouds:
    {
        iconName: "weather-cloudy",
        gradient: ["#bdc3c7", "#bdc3c7"]
    }
}

export default function Weather({temp, condition})
{
    return (
    <LinearGradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}>
        <StatusBar barStyle="white-content" />
        <View style={styles.halfcontent}>
            <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color="white" />
        <Text style={styles.temp}>{temp} °C</Text>
    </View>
        <View style={styles.halfcontent}>
    </View>
    </LinearGradient>
    );
}

// 인자값이 제대로 된 값인지 확인 (개발중에만 사용됨)
Weather.propTypes =
{
    temp: propTypes.number.isRequired,
    condition: propTypes.oneOf([
        "Thunderstorm", "Drizzle", "Rain", "Snow", 
        "Mist", "Smoke","Haze","Dust",
        "Fog", "Sand", "Dust", "Ash",
        "Squall", "Tornado", "Clear", "Clouds"
    ]).isRequired
}

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    
    temp: 
    {
        fontSize: 42,
        color: 'white'
    },

    halfcontent:
    {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});