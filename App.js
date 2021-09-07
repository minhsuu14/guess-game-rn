import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
    const [userNum, setUserNum] = useState();
    const [guessRound, setGuessRound] = useState(0);

    const userNumHandler = (enteredNum) => {
        setUserNum(enteredNum);
    };

    const guessRoundHandler = (numberOfRound) => {
        return setGuessRound(numberOfRound);
    };

    const restartHandler = () => {
        setGuessRound(0);
        setUserNum(null);
    };

    let screen = <StartGameScreen onStartButton={userNumHandler} />;
    if (userNum && guessRound === 0) {
        screen = <GameScreen userNum={userNum} gameOver={guessRoundHandler} />;
    } else if (guessRound > 0) {
        screen = (
            <GameOverScreen onRestart={restartHandler} userNum={userNum} />
        );
    }

    return (
        <View style={styles.screen}>
            <Header title='Guess The Number' />
            {screen}
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
});
