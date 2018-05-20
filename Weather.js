import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import propTypes from "prop-types";

const weatherCases = {
	Rain: {
		colors: ['#00C6FB', '#005BEA'],
		title: 'Raining like a MF',
		subtitle: 'Go to eat Pakjeon!',
		icon: 'weather-rainy',
	},
	Clear: {
		colors: ['#FEF253', '#FF7300'],
		title: 'Sunny',
        subtitle: 'Go out!',
		icon: 'weather-sunny',
	},
	Thunderstorm: {
		colors: ['#00ECBC', '#007ADF'],
		title: 'Thunderstorm',
        subtitle: 'Scary story time',
		icon: 'weather-lightning',
	},
	Clouds: {
		colors: ['#D7D2CC', '#304352'],
		title: 'Clouds',
        subtitle: 'Thickly',
		icon: 'weather-cloudy',
	},
	Snow: {
		colors: ['#7DE2FC', '#B9B6E5'],
		title: 'Snow',
        subtitle: 'Make a snowman!',
		icon: 'weather-snowy',
	},
	Drizzle: {
		colors: ['#89F7FE', '#66A6FF'],
		title: 'Drizzle',
        subtitle: 'Crack crack frog sing a song',
		icon: 'weather-hail',
	},
	Haze: {
		colors: ['#89F7FE', '#66A6FF'],
		title: 'Haze',
        subtitle: "Foggy day",
		icon: 'weather-hail',
	},
	Mist: {
		colors: ['#D7D2CC', '#304352'],
		title: 'Mist',
        subtitle: "Dreamy day",
		icon: 'weather-fog',
	},
};

function Weather({ weatherName, temp }) {
    console.log(weatherName);
    return (
        <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>
            <View style={styles.upper}>
                <MaterialCommunityIcons color="white" size={144} name={weatherCases[weatherName].icon} />
                <Text style={styles.temp}>{temp}℃</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: propTypes.number.isRequired,
    weatherName: propTypes.string.isRequired
};

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent"
    },
    temp: {
        backgroundColor: "transparent",
        color: "white",
        fontSize: 48,
        marginTop: 10
    },
    lower: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25
    },
    title: {
        fontSize: 38,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 10,
        fontWeight: "300"
    },
    subtitle: {
        marginBottom: 100,
        backgroundColor: "transparent",
        color: "white",
        fontSize: 24
    }
});