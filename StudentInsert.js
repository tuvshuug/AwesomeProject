import { response } from 'express';
import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class StudentInsert extends Component {


    constructor(props) {
        super(props);
        this.state = { RollNo: '', StudentName: '', Course: '' };
    }

    InsertRecord = () => {
        var RollNo = this.state.RollNo;
        var StudentName = this.state.StudentName;
        var Course = this.state.Course;

        if (RollNo.length == 0 || StudentName.length == 0 || Course.length == 0) {
            alert("Required Field is Missing");
        }
        else {
            var InsertAPIURL = "http://XXX.XXX.X.X:8080/api/insert.php"; // eniig solioroi

            var headers = {
                'Accept': 'application/json',
                'Content-Type': 'application.json'
            };
            var Data = {
                RollNo: RollNo,
                StudentName: StudentName,
                Course: Course

            };
            fetch(
                InsertAPIURL, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(Data)
            }
            )
                .then((response) => response.json())
                .then((response) => {
                    alert(response[0].Message);
                })
                .catch((error) => {
                    alert("Error" + error);
                })
        }
    }
    render() {
        return (
            <View style={styles.ViewStyle}>
                <TextInput
                    placeholder={"RollNo"}
                    placeholderTextColor={"white"}
                    keyboardType={"numeric"}
                    style={styles.txtStyle}
                    onChangeText={RollNo => this.setState({ RollNo })}
                />
                <TextInput
                    placeholder={"Student Name"}
                    placeholderTextColor={"white"}
                    style={styles.txtStyle}
                    onChangeText={StudentName => this.setState({ StudentName })}
                />
                <TextInput
                    placeholder={"Course"}
                    placeholderTextColor={"white"}
                    style={styles.txtStyle}
                    onChangeText={Course => this.setState({ Course })}
                />

                <Button
                    title={"Save"}
                    onPress={this.InsertRecord}
                    style={styles.buttonstyle}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    ViewStyle:
    {
        flex: 1,
        padding: 30,
        backgroundColor: "orange", 
    },

    txtStyle:
    {
        borderBottomWidth: 2,
        borderBottomColor: 'white',

    },
    buttonstyle: {
        borderBottomWidth: 2,

    },
    

});
