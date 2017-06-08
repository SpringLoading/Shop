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
    componentDidMount(){

    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>{
                    this.popTopHome()}}>
                <Text style={styles.welcome}>
                    测试跳转{this.props.zhc}{this.props.params.zhc}{this.props.passProps.zhc}{this.props.zhc}
                </Text>
                </TouchableOpacity>
            </View>
        );
    }

    popTopHome(){
        this.props.callbackzhc('：我就是回调的函数'+this.props.params.zhc+this.props.passProps.zhc);//需要在定义路由的时候设置props{...route}
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