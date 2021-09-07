import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import colors from '../constants/colors';
import Card from '../components/Card';

const GameOverScreen = ({ onRestart, userNum }) => {
    return (
        <View style={styles.screen}>
            <Card style={styles.container}>
                <Text style={styles.text}>Game is over !</Text>
                <Text>Your Number is {userNum} </Text>
                <View style={styles.buttonContainer}>
                    <Button title='PLAY AGAIN' onPress={onRestart} />
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 15,
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        color: colors.accent,
    },
    container: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        marginTop: 15,
    },
});

export default GameOverScreen;
