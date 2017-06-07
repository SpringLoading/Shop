/**
 * Created by barry on 2017/6/5.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Platform

} from 'react-native';


export default class HomeDetail extends Component{

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>{
                    this.popTopHome()}}>
                <Text style={styles.welcome}>
                    测试跳转
                </Text>
                </TouchableOpacity>
            </View>
        );
    }

    popTopHome(){
        this.props.navigator.pop();
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});