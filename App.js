import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class StudentInsert extends Component {
    render() {
        return (
            <View style={styles.ViewStyle}>
                <TextInput
                    placeholder={"RollNo"}
                    placeholderTextColor={"#FF0000"}
                    keyboardType={"numeric"}
                    style={styles.txtStyle}
                />
                <TextInput
                    placeholder={"Student Name"}
                    placeholderTextColor={"#FF0000"}
                    style={styles.txtStyle}
                />
                <TextInput
                    placeholder={"Course"}
                    placeholderTextColor={"#FF0000"}
                    style={styles.txtStyle}
                />

                <Button
                    title={"Save"}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    ViewStyle:
    {
        flex: 1,
        padding: 20,
        marginTop: 10
    },

    txtStyle:
    {
        borderBottomWidth: 1,
        borderBottomColor: 'red',
        MarginBottom: 20
    }

});