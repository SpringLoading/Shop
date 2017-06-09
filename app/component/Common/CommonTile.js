/**
 * Created by barry on 2017/6/7.
 */

import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';


export default class CommonTile extends Component{

    render(){
        return(
            <View style={styles.containerStyles}>
                <Text>{this.props.title}</Text>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    containerStyles:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },

    rightStyles:{

    },

    centerSyles:{

    },

    leftStyles:{

    }
})
