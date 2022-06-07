import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CustomButton from '../components/CustomButton';


const styles = StyleSheet.create({
    title: {
        fontSize: '80px',
        textAlign: 'center',
        marginBottom: '120px',
        marginTop: '120px',
    }
})

export default function Home({ navigation }) {
    // Changes page view with given parameter
    const changePage = (pageName) => {
        navigation.navigate(pageName);
    }

    return (
        <View>
            <Text style={styles.title}>Supply Tracker</Text>
            <CustomButton onPress={() => changePage('Supplies')} title='Get Started' />
        </View>
    );
}