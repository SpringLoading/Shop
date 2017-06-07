/**
 * Created by barry on 2017/6/5.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet

} from 'react-native';


export default class Shop extends Component{

    render(){
        return(
            <View style={styles.container}>
                <Text>Shop</Text>
            </View>
        )

    }


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'red',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});