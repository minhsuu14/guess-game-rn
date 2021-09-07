import React, { useState } from 'react';
import {
    Text,
    View,
    Button,
    StyleSheet,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
} from 'react-native';
import Card from '../components/Card';
import colors from '../constants/colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';

const StartGameScreen = ({ onStartButton }) => {
    const [enteredInput, setEnteredInput] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    //Check user's input, if there is not a number, input will be cleared
    const enteredInputHandler = (textInput) => {
        if (isNaN(textInput) === true) {
            return setEnteredInput('');
        }
        return setEnteredInput(textInput);
    };
    //-------------- RESET button function-----------------
    const resetInputHandler = () => {
        return setEnteredInput('');
    };
    //--------------CONFIRM button function-------------------
    //invalid number will be denied, user must select number between 1-99
    const confirmInputHandler = () => {
        const num = parseInt(enteredInput, 10);
        if (num <= 0 || isNaN(num)) {
            Alert.alert(
                'Invalid number',
                'You must select number between 1-99',
                [
                    {
                        text: 'Got it',
                        onPress: resetInputHandler,
                        style: 'destructive',
                    },
                ]
            );
            return;
        } else {
            setEnteredInput(''); //Confirm also reset user's input
            setConfirmed(true);
            setSelectedNumber(num);
            Keyboard.dismiss();
        }
    };
    //-------------------CONFIRMED STATE----------------------------------
    let yourNum;
    if (confirmed) {
        yourNum = (
            <Card style={{ marginTop: 10, alignItems: 'center' }}>
                <Text>Selected</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Button
                    title='START'
                    color={colors.primary}
                    onPress={() => onStartButton(selectedNumber)}
                />
            </Card>
        );
    }
    //--------------------------------------------------------------------
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a new game !</Text>
                <Card style={styles.inputContainer}>
                    <Input
                        style={styles.input}
                        blurOnSubmit
                        keyboardType='number-pad'
                        maxLength={2}
                        onChangeText={enteredInputHandler}
                        value={enteredInput}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button
                                color={colors.accent}
                                title='RESET'
                                onPress={resetInputHandler}
                            />
                        </View>
                        <View style={styles.button}>
                            <Button
                                color={colors.primary}
                                title='CONFIRM'
                                onPress={confirmInputHandler}
                            />
                        </View>
                    </View>
                </Card>
                {yourNum}
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 15,
    },
    button: {
        width: 100,
    },
    input: {
        textAlign: 'center',
    },
});

export default StartGameScreen;
