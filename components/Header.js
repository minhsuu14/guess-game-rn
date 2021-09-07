import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const Header = ({ title }) => (
    <View style={styles.header}>
        <Text style={styles.titleHeader}>{title}</Text>
    </View>
);

export default Header;

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        backgroundColor: colors.primary,
        paddingTop: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleHeader: {
        color: '#323c4d',
        fontSize: 18,
    },
});
