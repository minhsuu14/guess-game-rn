import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import colors from '../constants/colors';

const NumberContainer = (props) => {
    return(
    <View {...props} style={{ ...styles.container, ...props.style }}>
        <Text style={styles.text}>{props.children}</Text>
    </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: 50,
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 10,
        marginTop: 10,
        padding: 5,
        borderColor: colors.primary,
    },
    text: {
        fontSize: 16,
    },
});

export default NumberContainer;
