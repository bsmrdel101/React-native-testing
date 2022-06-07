import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


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
            <Button onPress={() => changePage('Supplies')} title='Learn More' style={styles.button} />
        </View>
    );
}