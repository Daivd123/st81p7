import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Image,
    ScrollView,
    Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RFValue} from 'react-native-responsive-fontsize';
import{TouchableOpacity} from 'react-native-gesture-handler';
import * as Speech from 'expo-speech';

import {getAuth} from 'firebase/auth';
import {ref,onValue} from 'firebase/database';
import db from '../config';

import * as Font from 'expo-font';

import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();

let customFonts = {
    'BubblegumSans': require ('../assets/fonts/BubblegumSans-REgule.ttf'),
};

export default class StoryScreen extends Component {
    constructor(props) {
        super(props);
        this.state ={
            fontsLoaded: false,
            speakerCOlor: 'gray',
            speakerIcon: 'volume-high-outline',
            light_theme: false,
        };
    }

    async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true});
    }

    componentDidMount() {
        this._loadFontsAsync();
        this.fetchUser();
    }

    async fetchUser() {
        let theme;
        consteuth =getAuth();
        const userId = auth.currentUser.uid;
    }
}