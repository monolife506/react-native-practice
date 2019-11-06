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
        gradient: ["#f7b733", "#fc4a1a"],
        subtitle: "날씨가 맑아서 기분이 좋네요"
    },

    // 비나 천둥/번개
    Rain:
    {
        iconName: "weather-pouring",
        gradient: ["#1488CC", "#2B32B2"],
        subtitle: "우산은 잊지 마세요"
    },
    Drizzle:
    {
        iconName: "weather-rainy",
        gradient: ["#2F80ED", "#56CCF2"],
        subtitle: "비는 약하게 오지만 우산은 챙겨가세요"
    },
    Thunderstorm:
    {
        iconName: "weather-lightning-rainy",
        gradient: ["#A6FFCB", "#12D8FA", "#1FA2FF"],
        subtitle: "비바람이 몰아치는 날이에요"
    },

    // 눈
    Snow:
    {
        iconName: "weather-snowy",
        gradient: ["#86fde8", "#acb6e5"],
        subtitle: "하늘에서 눈꽃이 내려와요"
    },

    // 대기 상태
    Mist:
    {
        iconName: "weather-fog",
        gradient: ["#D3959B", "#BFE6BA"],
        subtitle: "시야가 잘 보이지 않을 수도 있어요"
    },
    Smoke:
    {
        iconName: "weather-fog",
        gradient: ["#D3959B", "#BFE6BA"],
        subtitle: "공기 질이 좋지 않은것 같네요"
    },
    Haze:
    {
        iconName: "weather-fog",
        gradient: ["#D3959B", "#BFE6BA"],
        subtitle: "시야가 잘 보이지 않을 수도 있어요"
    },
    Dust:
    {
        iconName: "weather-fog",
        gradient: ["#D3959B", "#BFE6BA"],
        subtitle: "공기 질이 좋지 않은것 같네요"
    },
    Fog:
    {
        iconName: "weather-fog",
        gradient: ["#D3959B", "#BFE6BA"],
        subtitle: "시야가 잘 보이지 않을 수도 있어요"
    },
    Sand:
    {
        iconName: "weather-fog",
        gradient: ["#D3959B", "#BFE6BA"],
        subtitle: "공기 질이 좋지 않은것 같네요"
    },
    Ash:
    {
        iconName: "weather-fog",
        gradient: ["#D3959B", "#BFE6BA"],
        subtitle: "공기 질이 좋지 않은것 같네요"
    },
    Squall:
    {
        iconName: "weather-hurricane",
        gradient: ["#004e92", "#000428"],
        subtitle: "갑자기 바람이 많이 불 수 있어요"
    },
    Tornado:
    {
        iconName: "weather-hurricane",
        gradient: ["#004e92", "#000428"],
        subtitle: "절대 밖으로 나가지 마세요"
    },

    // 흐림
    Clouds:
    {
        iconName: "weather-cloudy",
        gradient: ["#bdc3c7", "#bdc3c7"],
        subtitle: "날씨가 많이 흐린것 같네요"
    }
}

export default function Weather({temp, condition, description})
{
    return (
    <LinearGradient
    colors={weatherOptions[condition].gradient}
    style={styles.container}>
        <StatusBar barStyle="white-content" />
        <View style={styles.topcontent}>
            <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={100} color="white" />
            <Text style={styles.temp}>{temp} °C</Text>
        </View>
        <View style={styles.bottomcontent}>
            <Text style={styles.title}>{description}</Text>
            <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
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
        fontSize: 54,
        color: 'white'
    },
    
    title: 
    {
        fontSize: 44,
        color: 'white',
        fontWeight: "300",
        marginBottom: 10
    },

    subtitle: 
    {
        fontSize: 24,
        color: 'white'
    },

    topcontent:
    {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    bottomcontent:
    {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start"
    }
});