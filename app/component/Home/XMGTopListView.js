/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TouchableOpacity,
    Platform
} from 'react-native';


var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');//解构赋值

// 全局的变量
var cols = 5;
var cellW = Platform.OS == 'ios' ? 70: 60;
var cellH = 70;
var vMargin = (width - cellW * cols) / (cols + 1);

var TopListView = React.createClass({
    getDefaultProps(){
       return{
           dataArr: []
       }
    },

    getInitialState(){
        // 创建数据源
        var ds = new ListView.DataSource({rowHasChanged:(row1, row2) => row1 !== row2});

       return{
          dataSource: ds.cloneWithRows(this.props.dataArr)
       }
    },

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                contentContainerStyle={styles.contentViewStyle}
                scrollEnabled={false}
            />
        );
    },

    // 具体的cell
    renderRow(rowData){
        return(
          <TouchableOpacity onPress={()=>{alert(rowData.index)}}>
            <View style={styles.cellStyle}>
                <Image source={{uri: rowData.image}} style={{width:52, height:52}}/>
                <Text style={styles.titleStyle}>{rowData.title}</Text>
            </View>
          </TouchableOpacity>
        );
    }
    //
});


const styles = StyleSheet.create({
    contentViewStyle:{
        // 设置主轴的方向,水平方向
        flexDirection:'row',
        // 多个cell在同一行显示，css中的样式
        //nowrap：flex容器为单行。该情况下flex子项可能会溢出容器
        //wrap：flex容器为多行。该情况下flex子项溢出的部分会被放置到新行，子项内部会发生断行
        flexWrap:'wrap',
        // 宽度
        width:width
    },

    cellStyle:{
        // backgroundColor:'red',
        width:cellW,
        height:cellH,
        // 水平居中和垂直居中
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        marginLeft:vMargin
    },

    titleStyle:{
        fontSize:Platform.OS == 'ios' ? 14 : 12,
        color:'gray'
    }
});

// 输出组件类
module.exports = TopListView;
