/**
 * Created by barry on 2017/6/5.
 */
import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';
import CommonTile from '../Common/CommonTile';

export default class More extends Component{

    render(){
        return(
            <View>
                <CommonTile title = '更多'/>
            </View>
        )

    }
}