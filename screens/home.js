import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import CustomButton from '../components/CustomButton';


const styles = StyleSheet.create({
    button: {
        color: '#841584'
    },
})

export default function Home({ navigation }) {
    // Changes page view with given parameter
    const changePage = (pageName) => {
        navigation.navigate(pageName);
    }

    return (
        <View>
            <Text>Home screen</Text>
            <Button onPress={() => changePage('Supplies')} title='Get Started' style={styles.button} />
            <CustomButton onPress={() => changePage('Supplies')} title='Get Started' />
        </View>
    );
}