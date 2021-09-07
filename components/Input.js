import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = (props) => {
    return(
        <TextInput {...props} style={{...props.style, ...styles.input}} />
    )
};

const styles = StyleSheet.create({
    input: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        margin: 10,
        width: 50,
    }
});

export default Input;