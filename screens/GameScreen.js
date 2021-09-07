import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';

const generateGuessNumber = (max, min, exclude) => {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateGuessNumber(max, min, exclude);
    }
    return rndNum;
};

const GameScreen = ({ userNum, gameOver }) => {
    const [guessNum, setGuessNum] = useState(
        generateGuessNumber(100, 1, userNum)
    );
    const currentMin = useRef(1);
    const currentMax = useRef(100);
    const roundCounter = useRef(0);

    useEffect(() => {
        roundCounter.current += 1;
        if (guessNum === userNum) {
            gameOver(roundCounter.current);
        }
    }, [guessNum]);

    const nextGuess = (direction) => {
        if (
            (direction === 'lower' && guessNum < userNum) ||
            (direction === 'greater' && guessNum > userNum)
        ) {
            Alert.alert("Don't lie", "You know it's wrong", [
                { text: 'Sorry', style: 'cancel' },
            ]);
            return;
        }
        if (direction === 'lower') {
            currentMax.current = guessNum;
        } else {
            currentMin.current = guessNum;
        }
        return setGuessNum(
            generateGuessNumber(
                currentMax.current,
                currentMin.current,
                guessNum
            )
        );
    };

    return (
        <View style={styles.screen}>
            <Card style={styles.guessNumContainer}>
                <Text>Opponent's guess</Text>
                <NumberContainer>{guessNum}</NumberContainer>
                <View style={styles.buttonContainer}>
                    <Button
                        title='LOWER'
                        onPress={nextGuess.bind(this, 'lower')}
                    />
                    <Button
                        title='GREATER'
                        onPress={nextGuess.bind(this, 'greater')}
                    />
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        padding: 10,
        flex: 1,
        margin: 10,
    },
    guessNumContainer: {
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        width: 300,
        maxWidth: '80%',
    },
});

export default GameScreen;
